import styled from 'styled-components/native';
import carLogoLight from '@shared/assets/car-logo-light.png';
import carLogoDark from '@shared/assets/car-logo-dark.png';
import { useTheme } from '@shared/hooks/theme';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoImage = styled.Image``;

const LogoText = styled.Text`
  color: #ff8100;
  margin-left: ${({ theme }) => theme.screen.rem(0.5)}px;
  font-family: 'Roboto_400Regular';
`;

const Logo = (): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <Container>
      {customTheme.palett.title === 'light' ? (
        <LogoImage source={carLogoDark} />
      ) : (
        <LogoImage source={carLogoLight} />
      )}
      <LogoText>app-cars</LogoText>
    </Container>
  );
};

export default Logo;
