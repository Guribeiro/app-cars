import { useCallback } from 'react';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { useAlert } from '@shared/hooks/alert';
import { useAuthentication } from '@modules/authentication/hooks/authentication';
import Button from '@shared/components/Button';
import TextInput from '@shared/components/Inputs/InputText';
import EditScreenLabel from '@modules/profile/components/EditScreenLabel';

import { Container } from './styles';

interface FormProps {
  name: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Informe seu nome'),
});

const UpdateUserName = (): JSX.Element => {
  const { goBack } = useNavigation();

  const { updateUserName, userName, loading } = useAuthentication();

  const { alert } = useAlert();

  const { control, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      name: userName,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async ({ name }: FormProps) => {
      try {
        await updateUserName({
          name,
        });
        alert({
          type: 'success',
          title: 'Sucesso',
          message: 'Seu nome foi atualizado',
        });
        goBack();
      } catch (error) {
        alert({
          type: 'error',
          title: 'Algo deu errado',
          message: error as string,
        });
      }
    },
    [alert, updateUserName, goBack],
  );

  return (
    <Container>
      <View>
        <EditScreenLabel>Atualizar nome</EditScreenLabel>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextInput onChangeText={onChange} value={value} error={error} />
          )}
        />
      </View>
      <Button loading={loading} onPress={handleSubmit(onSubmit)}>
        Salvar
      </Button>
    </Container>
  );
};

export default UpdateUserName;
