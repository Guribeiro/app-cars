import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Container from '@modules/authentication/components/Container';

import Button from '@shared/components/Button';
import Text from '@shared/components/Text';
import homeBackground from '@shared/assets/home-background.png';

import { SmallText, TextEmphasized, BackgroundImage } from './styles';

const Welcome = (): JSX.Element => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <View>
        <Text size="large">
          Cadastro de <TextEmphasized size="large">carros</TextEmphasized>
        </Text>
        <SmallText size="tiny">
          Tenha os seus favoritos na palma {'\n'} da sua mão
        </SmallText>
        <BackgroundImage source={homeBackground} />
      </View>

      <Button onPress={() => navigate('SigninScreen')}>Entrar</Button>
    </Container>
  );
};

export default Welcome;
