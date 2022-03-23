import styled from 'styled-components/native';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useCar } from '@modules/car/hooks/car';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import Button from '@shared/components/Button';
import Scroll from '@shared/components/Scroll';
import Spacer from '@shared/components/Spacer';
import Container from '@shared/components/Container';
import Input from '@shared/components/Inputs/InputText';
import InputMoney from '@shared/components/Inputs/InputMoney';

export const Text = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1.5)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;

export const TextEmphasized = styled(Text)`
  color: ${({ theme }) => theme.palett.colors.orange};
`;

interface FormData {
  title: string;
  brand: string;
  price: string;
  year: string;
}

interface EditCarParams {
  id: string;
  title: string;
  brand: string;
  priceFormatted: string;
  price: string;
  age: number;
}

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DeleteButton = styled.TouchableOpacity`
  align-items: center;
`;

const DeleteButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.screen.rem(0.8, true)}px;
  font-family: 'Roboto_400Regular';
  line-height: ${({ theme }) => theme.screen.rem(1.4)}px;
`;

const schema = Yup.object().shape({
  title: Yup.string().required('Informe o modelo do veículo'),
  brand: Yup.string().required('Informe a marca do veículo'),
  price: Yup.string()
    .required()
    .notOneOf(['0'], 'você deve informar o preço do carro'),
  year: Yup.string()
    .required()
    .min(4, 'Formato inválido, mínimo 04 caracteres'),
});

const EditCar = (): JSX.Element => {
  const {
    update,
    loading,
    showAnimatedModalConfirmation,
    hideAnimatedModalConfirmation,
  } = useCar();
  const { params } = useRoute();

  const car = params as EditCarParams;

  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      title: car.title,
      brand: car.brand,
      price: car.price,
      year: String(car.age),
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    return () => hideAnimatedModalConfirmation();
  }, [hideAnimatedModalConfirmation]);

  const onSubmit = useCallback(
    async ({ title, brand, price, year }: FormData) => {
      await update({ id: car.id, title, brand, price, age: Number(year) });
    },
    [update, car.id],
  );

  return (
    <Scroll>
      <Container>
        <Row>
          <Text>
            Editar <TextEmphasized>carro</TextEmphasized>
          </Text>
          <DeleteButton onPress={showAnimatedModalConfirmation}>
            <Feather name="trash" color="#ee4141" size={24} />
            <DeleteButtonText>Excluir</DeleteButtonText>
          </DeleteButton>
        </Row>
        <View>
          <Controller
            name="title"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label="modelo"
                required
                placeholder="ex: Corola"
                onChangeText={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <Spacer size={8} />
          <Controller
            name="brand"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label="marca"
                required
                placeholder="ex: Toyota"
                onChangeText={onChange}
                value={value}
                error={error}
              />
            )}
          />
          <Spacer size={8} />
          <Controller
            name="price"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <InputMoney
                defaultValue={car.price}
                label="preço"
                required
                prefix="R$"
                onChangeText={(text, rawValue) => {
                  onChange(text);
                  setValue('price', rawValue);
                }}
                value={value}
                error={error}
              />
            )}
          />
          <Spacer size={8} />
          <Controller
            name="year"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label="ano"
                required
                maxLength={4}
                keyboardType="numeric"
                placeholder="ex: 2022"
                onChangeText={onChange}
                value={value}
                error={error}
              />
            )}
          />
        </View>
        <Spacer size={32} />
        <Button loading={loading} onPress={handleSubmit(onSubmit)}>
          Salvar
        </Button>
      </Container>
    </Scroll>
  );
};

export default EditCar;
