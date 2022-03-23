import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import images from '@modules/car/utils/carImageHelper';

import Spacer from '@shared/components/Spacer';

import { useMemo } from 'react';
import Button from '@shared/components/Button';

import {
  Container,
  Content,
  DetailsContainer,
  SpecificationContainer,
  SpecificationLabel,
  SpecificationText,
  PriceContainer,
  PriceLabelText,
  PriceText,
  CarImage,
} from './styles';

interface CardCarProps {
  id: string;
  title: string;
  brand: string;
  priceFormatted: string;
  price: string;
  age: number;
}

const CardCar = ({
  id,
  title,
  brand,
  priceFormatted,
  price,
  age,
}: CardCarProps): JSX.Element => {
  const { navigate } = useNavigation();

  const carImage = useMemo(() => {
    return images[brand] || images.Toyota;
  }, [brand]);

  return (
    <Container>
      <Content>
        <CarImage source={carImage} />

        <DetailsContainer>
          <View>
            <SpecificationContainer>
              <SpecificationLabel>Modelo</SpecificationLabel>
              <SpecificationText>{title}</SpecificationText>
            </SpecificationContainer>
            <SpecificationContainer>
              <SpecificationLabel>Marca</SpecificationLabel>
              <SpecificationText>{brand}</SpecificationText>
            </SpecificationContainer>
            <SpecificationContainer>
              <SpecificationLabel>Ano</SpecificationLabel>
              <SpecificationText>{age}</SpecificationText>
            </SpecificationContainer>
          </View>
          <PriceContainer>
            <PriceLabelText>Preço</PriceLabelText>
            <PriceText>{priceFormatted}</PriceText>
          </PriceContainer>
        </DetailsContainer>
        <Spacer size={24} />
        <Button
          onPress={() =>
            navigate('CarDetailsScreen', {
              id,
              title,
              brand,
              priceFormatted,
              price,
              age,
              carImage,
            })
          }
        >
          Ver mais
        </Button>
      </Content>
    </Container>
  );
};
export default CardCar;
