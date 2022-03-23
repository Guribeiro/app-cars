import { ScrollView } from 'react-native';

import { useAuthentication } from '@modules/authentication/hooks/authentication';
import { useCar } from '@modules/car/hooks/car';
import CardCar from '@modules/car/components/CardCar';

import Text from '@shared/components/Text';
import Spacer from '@shared/components/Spacer';
import Loading from '@shared/components/Loading';
import SmallText from '@shared/components/SmallText';

import { Container, TextEmphasized, NumberedCarsContainer } from './styles';

const Home = (): JSX.Element => {
  const { userName } = useAuthentication();
  const { cars, numberedCars, loading } = useCar();

  if (loading) return <Loading />;

  return (
    <Container>
      <Text size="small">
        Olá, <TextEmphasized size="small">{userName}</TextEmphasized>
      </Text>
      <Spacer size={8} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NumberedCarsContainer>
          <SmallText size="small">Unidades</SmallText>
          <TextEmphasized size="small">{numberedCars}</TextEmphasized>
        </NumberedCarsContainer>
        <Spacer size={24} />
        {cars.map(({ _id, title, brand, priceFormatted, price, age }) => (
          <CardCar
            key={_id}
            id={_id}
            title={title}
            brand={brand}
            price={price}
            priceFormatted={priceFormatted}
            age={age}
          />
        ))}
        <Spacer size={48} />
      </ScrollView>
    </Container>
  );
};

export default Home;
