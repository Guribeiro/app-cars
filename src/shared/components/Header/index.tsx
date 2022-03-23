import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { StackNavigationHelpers } from '@react-navigation/stack/src/types';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { useTheme } from '@shared/hooks/theme';

import Logo from '../Logo';

const Container = styled.View`
  padding: ${({ theme }) => theme.screen.rem(3)}px
    ${({ theme }) => theme.screen.rem(1.6)}px
    ${({ theme }) => theme.screen.rem(1.6)}px;

  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
`;

const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-family: 'Roboto_400Regular';
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
  margin-left: ${({ theme }) => theme.screen.rem(0.5)}px;
`;

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
            <Feather name="menu" size={24} color="#ff8100" />
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
