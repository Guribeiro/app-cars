import { RootStackParamsList } from '../src/shared/routes';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamsList;
  }
}
