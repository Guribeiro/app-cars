/* eslint-disable react/style-prop-object */
import styled from 'styled-components/native';
import { useAuthentication } from '@modules/authentication/hooks/authentication';
import AuthenticationRoutes from '@modules/authentication/routes';
import Loading from '@modules/authentication/components/Loading';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@shared/hooks/theme';

import DrawerRoutes from './drawer.routes';

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.palett.colors.primary_opacity_100};
`;

const Routes = (): JSX.Element => {
  const { userName, signInLoading } = useAuthentication();
  const { customTheme } = useTheme();

  if (signInLoading) return <Loading />;
  return (
    <Container>
      <StatusBar
        translucent
        style={customTheme.palett.title === 'dark' ? 'light' : 'dark'}
      />
      {!userName ? <AuthenticationRoutes /> : <DrawerRoutes />}
    </Container>
  );
};
export default Routes;
