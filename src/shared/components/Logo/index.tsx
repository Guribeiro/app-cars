import styled from 'styled-components/native';
import { Image } from 'react-native';
import carLogoLight from '@shared/assets/car-logo-light.png';
import carLogoDark from '@shared/assets/car-logo-dark.png';
import { useTheme } from '@shared/hooks/theme';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoText = styled.Text`
  color: ${({ theme }) => theme.palett.colors.orange};
  margin-left: ${({ theme }) => theme.screen.rem(0.5)}px;
  font-family: 'Roboto_400Regular';
`;

const Logo = (): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <Container>
      {customTheme.palett.title === 'light' ? (
        <Image source={carLogoDark} />
      ) : (
        <Image source={carLogoLight} />
      )}
      <LogoText>app-cars</LogoText>
    </Container>
  );
};

export default Logo;
