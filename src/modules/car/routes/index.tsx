import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@shared/hooks/theme';

import CarDetails from '@modules/car/screens/CarDetails';
import Home from '@modules/car/screens/Home';
import Header from '@shared/components/Header';
import RegisterCar from '@modules/car/screens/RegisterCar';
import EditCar from '@modules/car/screens/EditCar';

const CarStack = createStackNavigator();

const CarRoutes = (): JSX.Element => {
  const { customTheme } = useTheme();
  return (
    <CarStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        cardStyle: {
          backgroundColor: customTheme.palett.colors.primary_opacity_100,
        },
      }}
    >
      <CarStack.Screen
        name="HomeScreen"
        component={Home}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <Header type="menu" navigation={navigation} />,
        })}
      />

      <CarStack.Screen
        name="CarDetailsScreen"
        component={CarDetails}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <Header type="back" navigation={navigation} />,
        })}
      />
      <CarStack.Screen
        name="RegisterCarScreen"
        component={RegisterCar}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <Header type="back" navigation={navigation} />,
        })}
      />
      <CarStack.Screen
        name="EditCarScreen"
        component={EditCar}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => <Header type="back" navigation={navigation} />,
        })}
      />
    </CarStack.Navigator>
  );
};

export default CarRoutes;
