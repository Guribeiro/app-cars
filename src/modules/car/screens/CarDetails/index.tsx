import { View, ImageSourcePropType, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Spacer from '@shared/components/Spacer';
import { useCar } from '@modules/car/hooks/car';
import Loading from '@shared/components/Loading';
import { useTheme } from '@shared/hooks/theme';

import {
  Container,
  Content,
  Header,
  EditButton,
  EditButtonText,
  DetailsContainer,
  SpecificationContainer,
  SpecificationLabel,
  SpecificationText,
  PriceContainer,
  PriceLabelText,
  PriceText,
} from './styles';

interface CarDetailsParams {
  id: string;
  title: string;
  brand: string;
  age: number;
  price: string;
  priceFormatted: string;
  carImage: ImageSourcePropType;
}

const CarDetails = (): JSX.Element => {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const { customTheme } = useTheme();

  const { loading, show } = useCar();

  const { id, title, brand, age, price, priceFormatted, carImage } =
    params as CarDetailsParams;

  return (
    <Container>
      <View>
        <Header>
          <EditButton
            onPress={() => {
              navigate('EditCarScreen', {
                id,
                title,
                brand,
                price,
                priceFormatted,
                age,
              });
              show({ id });
            }}
          >
            <Feather
              name="edit"
              size={24}
              color={customTheme.palett.colors.text_primary_opacity_100}
            />
            <EditButtonText>Editar</EditButtonText>
          </EditButton>
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <Content>
            <Spacer size={32} />
            <Image source={carImage} />
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
          </Content>
        )}
      </View>
    </Container>
  );
};

export default CarDetails;
