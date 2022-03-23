import { ImageSourcePropType } from 'react-native';

import FiatImage from '@modules/car/assets/fiat.png';
import HondaImage from '@modules/car/assets/honda.png';
import ChevroletImage from '@modules/car/assets/chevrolet.png';
import FordImage from '@modules/car/assets/ford.png';
import FerrariImage from '@modules/car/assets/ferrari.png';
import ToyotaImage from '@modules/car/assets/toyota.png';
import VolkswagenImage from '@modules/car/assets/volkswagen.png';

interface Brands {
  [key: string]: ImageSourcePropType;
}

const images: Brands = {
  Fiat: FiatImage,
  Honda: HondaImage,
  Chevrolet: ChevroletImage,
  Ford: FordImage,
  Ferrari: FerrariImage,
  Toyota: ToyotaImage,
  Volkswagen: VolkswagenImage,
};

export default images;
