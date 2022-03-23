import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';

import DrawerContent from '@shared/components/DrawerContent';
import ProfileRoutes from '@modules/profile/routes';
import CarRoutes from '@modules/car/routes';
import SettingsRoutes from '@modules/settings/routes';

import { useTheme } from '@shared/hooks/theme';

const Drawer = createDrawerNavigator();

const DrawerRoutes = (): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="CarRoutes"
      sceneContainerStyle={{
        backgroundColor: customTheme.palett.colors.primary_opacity_100,
      }}
      drawerContent={props => <DrawerContent {...props} />}
      drawerPosition="left"
      overlayColor="none"
      drawerStyle={{
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        backgroundColor: 'none',
      }}
    >
      <Drawer.Screen
        name="CarRoutes"
        component={CarRoutes}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ProfileRoutes"
        component={ProfileRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="SettingsRoutes"
        component={SettingsRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
