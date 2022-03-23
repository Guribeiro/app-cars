import { RootStackParamsList } from '@shared/routes';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamsList;
  }
}
