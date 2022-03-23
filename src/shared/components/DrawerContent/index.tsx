import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { useAuthentication } from '@modules/authentication/hooks/authentication';
import { useTheme } from '@shared/hooks/theme';
import DrawerItem from './DrawerItem';
import Spacer from '../Spacer';

import Header from './Header';

import { Container, SignOutButton, SignOutButtonText } from './styles';

const DrawerContent = ({
  navigation,
  ...rest
}: DrawerContentComponentProps): JSX.Element => {
  const { customTheme } = useTheme();
  const { signOut } = useAuthentication();

  return (
    <Container>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: 0,
        }}
        {...rest}
      >
        <Header navigation={navigation} />
        <Spacer size={30} />
        <DrawerItem
          label="Cadastrar carro"
          icon="plus"
          onPress={() => navigation.navigate('RegisterCarScreen')}
        />
        <DrawerItem
          label="Perfil"
          icon="user"
          onPress={() => navigation.navigate('ProfileRoutes')}
        />
        <DrawerItem
          label="Configurações"
          icon="settings"
          onPress={() => navigation.navigate('SettingsRoutes')}
        />
      </DrawerContentScrollView>
      <SignOutButton onPress={() => signOut()}>
        <Feather
          name="power"
          size={24}
          color={customTheme.palett.colors.primary_opacity_100}
        />
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default DrawerContent;
