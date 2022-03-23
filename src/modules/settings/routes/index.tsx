import React from 'react';
import { useTheme } from '@shared/hooks/theme';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '@shared/components/Header';

import SettingsScreen from '@modules/settings/screens/Settings';
// import ThemesScreen from '../screens/themes';

const SettingsStack = createStackNavigator();

const SettingsRoutes = (): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <SettingsStack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        cardStyle: {
          backgroundColor: customTheme.palett.colors.primary_opacity_100,
        },
      }}
    >
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <Header type="back" navigation={navigation} />,
        })}
      />
      {/* <SettingsStack.Screen
        name="ThemesScreen"
        component={ThemesScreen}
        options={{
          headerShown: false,
        }}
      /> */}
    </SettingsStack.Navigator>
  );
};

export default SettingsRoutes;
