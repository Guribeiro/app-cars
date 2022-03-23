import { TouchableOpacityProps } from 'react-native';
import Loading from '@shared/components/Loading';

import { Container, ButtonText } from './styles';

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
