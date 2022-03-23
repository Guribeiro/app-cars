import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@shared/components/Button';
import homeBackground from '@shared/assets/home-background.png';
import Text from '@shared/components/Text';
import Container from '@modules/authentication/components/Container';

import { SmallText, TextEmphasized, BackgroundImage } from './styles';

const Welcome = (): JSX.Element => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <View>
        <Text size="large">
          Cadastro de <TextEmphasized size="large">carros</TextEmphasized>
        </Text>
        <SmallText size="small">
          Tenha os seus favoritos na palma {'\n'} da sua mão
        </SmallText>
        <BackgroundImage source={homeBackground} />
      </View>

      <Button onPress={() => navigate('SigninScreen')}>Entrar</Button>
    </Container>
  );
};

export default Welcome;
