import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditProfileButton from '@modules/profile/components/EditProfileButton';
import Spacer from '@shared/components/Spacer';

import { useAuthentication } from '@modules/authentication/hooks/authentication';

import { Container, Text } from './styles';

const Profile = (): JSX.Element => {
  const { navigate } = useNavigation();
  const { userName } = useAuthentication();

  return (
    <Container>
      <View>
        <Text>Perfil do usuário</Text>
        <Spacer size={60} />
        <EditProfileButton
          label="Nome"
          onPress={() => navigate('UpdateUserNameScreen')}
        >
          {userName || 'Nome do usuário'}
        </EditProfileButton>
      </View>
    </Container>
  );
};

export default Profile;
