import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useAlert } from '@shared/hooks/alert';
import TextInput from '@shared/components/Inputs/InputText';
import Button from '@shared/components/Button';
import Text from '@shared/components/Text';
import Container from '@modules/authentication/components/Container';

import { useAuthentication } from '@modules/authentication/hooks/authentication';

import { TextEmphasized } from './styles';

interface FormProps {
  name: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Informe seu nome'),
});

const Signin = (): JSX.Element => {
  const { signIn, loading } = useAuthentication();
  const { alert } = useAlert();

  const { control, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async ({ name }: FormProps) => {
      try {
        await signIn({
          name,
        });
      } catch (error) {
        alert({
          type: 'error',
          title: 'Algo deu errado',
          message: error as string,
        });
      }
    },
    [alert, signIn],
  );

  return (
    <Container>
      <View>
        <Text>
          Antes de iniciarmos, seria legal saber o seu{' '}
          <TextEmphasized>nome</TextEmphasized>
        </Text>
      </View>

      <Controller
        name="name"
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            error={error}
            placeholder="ex: John doe"
          />
        )}
      />

      <Button loading={loading} onPress={handleSubmit(onSubmit)}>
        Entrar
      </Button>
    </Container>
  );
};

export default Signin;
