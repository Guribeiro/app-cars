/* eslint-disable no-underscore-dangle */
import { Dimensions } from 'react-native';
import { navigate, reset } from '@shared/routes/rootNavigation';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import api from '@modules/car/services/api';

import currencyFormatter from '@shared/utils/currencyFomatter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalConfirmation from '@modules/car/components/ModalConfirmation';
import verifyCodeError from '@shared/utils/verifyCodeError';
import { useAlert } from '@shared/hooks/alert';

interface CarContextData {
  carData: Car | undefined;
  cars: Cars;
  numberedCars: number;
  loading: boolean;
  show(props: ShowCarProps): Promise<void>;
  create(props: CreateCarProps): Promise<void>;
  update(props: UpdateCarProps): Promise<void>;
  remove(): Promise<void>;
  showAnimatedModalConfirmation(): void;
  hideAnimatedModalConfirmation(): void;
}

const CarContext = createContext<CarContextData>({} as CarContextData);

interface CarProviderProps {
  children: ReactNode;
}

interface Car {
  _id: string;
  title: string;
  brand: string;
  price: string;
  age: number;
  priceFormatted: string;
}

interface ShowCarProps {
  id: string;
}

interface CreateCarProps {
  title: string;
  brand: string;
  price: string;
  age: number;
}

interface UpdateCarProps {
  id: string;
  title: string;
  brand: string;
  price: string;
  age: number;
}

type Cars = Array<Car>;

const CarProvider = ({ children }: CarProviderProps): JSX.Element => {
  const INITIAL_VALUE = -400;
  const FINAL_VALUE = Dimensions.get('screen').height / 3;

  const [carData, setCarData] = useState<Car>();
  const [cars, setCars] = useState<Cars>([]);
  const [loading, setLoading] = useState(false);

  const { alert } = useAlert();

  const modalConfirmationOffset = useSharedValue(INITIAL_VALUE);
  const modalConfirmationOpacity = useSharedValue(0);

  const modalAnimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: modalConfirmationOffset.value,
      opacity: modalConfirmationOpacity.value,
    };
  });

  const showAnimatedModalConfirmation = useCallback(() => {
    modalConfirmationOffset.value = withTiming(FINAL_VALUE, {
      duration: 300,
      easing: Easing.ease,
    });
    modalConfirmationOpacity.value = withTiming(1, {
      duration: 200,
      easing: Easing.ease,
    });
  }, [modalConfirmationOffset, modalConfirmationOpacity, FINAL_VALUE]);

  const hideAnimatedModalConfirmation = useCallback(() => {
    modalConfirmationOffset.value = withTiming(INITIAL_VALUE, {
      duration: 300,
      easing: Easing.ease,
    });
    modalConfirmationOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.ease,
    });
  }, [modalConfirmationOffset, modalConfirmationOpacity, INITIAL_VALUE]);

  const loadStoragedCars = async () => {
    const storagedCars = await AsyncStorage.getItem('@app-cars/cars');

    if (storagedCars) {
      setCars(JSON.parse(storagedCars));
    }
  };

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      await loadStoragedCars();
      const { data } = await api.get('/cars');

      const response = data as Cars;

      const carsFormatted = response.map(car => ({
        ...car,
        brand: car.brand.trim(),
        priceFormatted: currencyFormatter(Number(car.price)),
      }));

      await AsyncStorage.setItem(
        '@app-cars/cars',
        JSON.stringify(carsFormatted),
      );

      setCars(carsFormatted);
      setLoading(false);
    };
    loadCars();
  }, []);

  const numberedCars = useMemo(() => {
    return cars.length;
  }, [cars.length]);

  const show = useCallback(
    async ({ id }: ShowCarProps) => {
      setLoading(true);

      const findIndex = cars.findIndex(({ _id }) => _id === id);

      const findCar = cars[findIndex];

      const carFormatted: Car = {
        ...findCar,
        brand: findCar.brand.trim(),
        priceFormatted: currencyFormatter(Number(findCar.price)),
      };

      setCarData(carFormatted);
      setLoading(false);
    },
    [cars],
  );

  const create = useCallback(
    async ({ title, brand, price, age }: CreateCarProps) => {
      setLoading(true);
      const { data } = await api.post<Car>('/cars', {
        title,
        brand,
        price,
        age,
      });

      const carFormatted: Car = {
        ...data,
        brand: data.brand.trim(),
        priceFormatted: currencyFormatter(Number(data.price)),
      };

      setCars(prev => [...prev, carFormatted]);

      setLoading(false);
    },
    [],
  );

  const update = useCallback(
    async ({ id, title, brand, price, age }: UpdateCarProps) => {
      try {
        setLoading(true);
        const { data } = await api.put<Car>(`/cars/${id}`, {
          title,
          brand,
          price,
          age,
        });

        const findIndex = cars.findIndex(({ _id }) => _id === id);

        const newCarsArray = [...cars];

        newCarsArray[findIndex] = {
          ...data,
          brand: data.brand.trim(),
          priceFormatted: currencyFormatter(Number(data.price)),
        };

        setCars(newCarsArray);

        navigate({
          name: 'CarDetailsScreen',
          params: {
            id: newCarsArray[findIndex]._id,
            title: newCarsArray[findIndex].title,
            brand: newCarsArray[findIndex].brand,
            price: newCarsArray[findIndex].price,
            priceFormatted: newCarsArray[findIndex].priceFormatted,
            age: newCarsArray[findIndex].age,
          },
        });

        alert({
          type: 'success',
          title: 'Sucesso',
          message: 'Carro foi atualizado com sucesso',
        });
      } catch (error) {
        alert({
          type: 'error',
          title: 'Falha',
          message: 'Não foi possível atualizar esse carro',
        });
      } finally {
        setLoading(false);
      }
    },
    [cars, alert],
  );

  const remove = useCallback(async () => {
    try {
      setLoading(true);
      if (!carData) return;
      const { _id } = carData;
      const { data } = await api.delete<Car>(`/cars/${_id}`);

      const filteredCars = cars.filter(findCar => findCar._id !== data._id);

      setCars(filteredCars);

      setCarData(undefined);

      alert({
        type: 'success',
        title: 'Sucesso',
        message: 'Carro foi deletado com sucesso',
      });

      reset({
        routes: [{ name: 'HomeScreen' }],
        index: 0,
      });
    } catch (error) {
      const message = verifyCodeError(error);
      alert({
        type: 'success',
        title: 'Sucesso',
        message,
      });
    } finally {
      setLoading(false);
    }
  }, [carData, cars, alert]);

  return (
    <CarContext.Provider
      value={{
        carData,
        cars,
        numberedCars,
        loading,
        show,
        create,
        update,
        remove,
        showAnimatedModalConfirmation,
        hideAnimatedModalConfirmation,
      }}
    >
      {children}
      <Animated.View
        style={[
          modalAnimatedStyle,
          { position: 'absolute', alignSelf: 'center' },
        ]}
      >
        <ModalConfirmation
          onPress={remove}
          onClose={hideAnimatedModalConfirmation}
        />
      </Animated.View>
    </CarContext.Provider>
  );
};

function useCar(): CarContextData {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error('useCar should be used within an CarProvider');
  }
  return context;
}

export { CarProvider, useCar };
