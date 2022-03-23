import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import Loading from '../Loading';

const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.screen.rem(3.125)}px;

  padding: ${({ theme }) => theme.screen.rem(1)}px;
  background-color: ${({ theme }) => theme.palett.colors.orange};
`;

const ButtonText = styled.Text`
  font-family: 'Roboto_500Medium';
  font-size: ${({ theme }) => theme.screen.rem(1, true)}px;
  color: ${({ theme }) => theme.palett.colors.text_primary_opacity_100};
`;

interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
}

const Button = ({ onPress, loading, children }: ButtonProps): JSX.Element => {
  return (
    <Container onPress={onPress}>
      {loading ? <Loading /> : <ButtonText>{children}</ButtonText>}
    </Container>
  );
};

export default Button;
