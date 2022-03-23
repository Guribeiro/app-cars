import { Feather } from '@expo/vector-icons';
import { StackNavigationHelpers } from '@react-navigation/stack/src/types';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { useTheme } from '@shared/hooks/theme';

import Logo from '@shared/components/Logo';

import { Container, MenuButton, ButtonText } from './styles';

type HeaderTypes = 'common' | 'menu' | 'back';

interface HeaderProps {
  type: HeaderTypes;
  navigation: StackNavigationHelpers & DrawerNavigationHelpers;
}

const Header = ({ type, navigation }: HeaderProps): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <Container>
      {type === 'common' && <Logo />}

      {type === 'menu' && (
        <>
          <Logo />
          <MenuButton onPress={() => navigation.openDrawer()}>
            <Feather
              name="menu"
              size={24}
              color={customTheme.palett.colors.orange}
            />
          </MenuButton>
        </>
      )}

      {type === 'back' && (
        <>
          <MenuButton onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              size={24}
              color={customTheme.palett.colors.text_primary_opacity_100}
            />
            <ButtonText>Voltar</ButtonText>
          </MenuButton>
          <Logo />
        </>
      )}
    </Container>
  );
};

export default Header;
