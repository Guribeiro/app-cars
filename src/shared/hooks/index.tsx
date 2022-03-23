import { ReactNode } from 'react';
import { CarProvider } from '@modules/car/hooks/car';
import { AuthenticationProvider } from '@modules/authentication/hooks/authentication';
import { ThemeProvider } from './theme';
import { AlertProvider } from './alert';

interface AppProviderProps {
  children: ReactNode;
}
const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AuthenticationProvider>
          <CarProvider>{children}</CarProvider>
        </AuthenticationProvider>
      </AlertProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
