import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '@shared/components/Header';
import { useTheme } from '@shared/hooks/theme';
import Profile from '@modules/profile/screens/Profile';
import UpdateUserName from '@modules/profile/screens/UpdateUserName';

const ProfileStack = createStackNavigator();

const ProfileRoutes = (): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: customTheme.palett.colors.primary_opacity_100,
        },
      }}
      initialRouteName="ProfileScreen"
    >
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <Header type="back" navigation={navigation} />,
        })}
      />
      <ProfileStack.Screen
        name="UpdateUserNameScreen"
        component={UpdateUserName}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <Header type="back" navigation={navigation} />,
        })}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoutes;
