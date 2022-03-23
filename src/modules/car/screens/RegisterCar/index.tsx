import { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAlert } from '@shared/hooks/alert';

import { useCar } from '@modules/car/hooks/car';

import Input from '@shared/components/Inputs/InputText';

import Button from '@shared/components/Button';
import Scroll from '@shared/components/Scroll';

import Container from '@shared/components/Container';
import Spacer from '@shared/components/Spacer';

import InputMoney from '@shared/components/Inputs/InputMoney';
import verifyCodeError from '@shared/utils/verifyCodeError';

import { Text, TextEmphasized } from './styles';

interface FormData {
  title: string;
  brand: string;
  price: string;
  year: string;
}

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

const RegisterCar = (): JSX.Element => {
  const { create, loading } = useCar();
  const { alert } = useAlert();

  const { reset } = useNavigation();

  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      title: '',
      brand: '',
      price: '',
      year: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async ({ title, brand, price, year }: FormData) => {
      try {
        await create({ title, brand, price, age: Number(year) });

        reset({
          routes: [{ name: 'HomeScreen' }],
          index: 0,
        });

        alert({
          type: 'success',
          title: 'Sucesso',
          message: 'Carro criado com sucesso',
        });
      } catch (error) {
        const message = verifyCodeError(error);
        alert({
          type: 'error',
          title: 'Falha',
          message,
        });
      }
    },
    [create, alert, reset],
  );

  return (
    <Scroll>
      <Container>
        <Text>
          Cadastrar <TextEmphasized>carro</TextEmphasized>
        </Text>
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
          Cadastrar
        </Button>
      </Container>
    </Scroll>
  );
};

export default RegisterCar;
