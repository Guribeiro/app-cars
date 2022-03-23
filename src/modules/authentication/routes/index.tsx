import { createStackNavigator } from '@react-navigation/stack';
import Header from '@shared/components/Header';
import { useTheme } from '@shared/hooks/theme';
import Welcome from '../screens/Welcome';
import Signin from '../screens/Signin';

export type RootStackParamsList = {
  WelcomeScreen: undefined;
  SigninScreen: undefined;
  DrawerRoutes: undefined;
};

const AuthenticationNavigator = createStackNavigator<RootStackParamsList>();

const AuthenticationRoutes = (): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <AuthenticationNavigator.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        cardStyle: {
          backgroundColor: customTheme.palett.colors.primary_opacity_100,
        },
      }}
    >
      <AuthenticationNavigator.Screen
        name="WelcomeScreen"
        component={Welcome}
        options={({ navigation }) => ({
          header: () => <Header type="common" navigation={navigation} />,
        })}
      />

      <AuthenticationNavigator.Screen
        name="SigninScreen"
        component={Signin}
        options={({ navigation }) => ({
          header: () => <Header type="back" navigation={navigation} />,
        })}
      />
    </AuthenticationNavigator.Navigator>
  );
};
export default AuthenticationRoutes;
