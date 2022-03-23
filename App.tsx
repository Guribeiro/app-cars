/* eslint-disable react/style-prop-object */
import 'intl';
import 'intl/locale-data/jsonp/en';
import { ScreenProvider } from 'responsive-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { useFonts } from 'expo-font';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { ActivityIndicator, View } from 'react-native';

import { navigationRef } from '@shared/routes/rootNavigation';

import AppProvider from './src/shared/hooks';
import Routes from './src/shared/routes';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#141517',
        }}
      >
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ScreenProvider baseFontSize={16}>
        <NavigationContainer ref={navigationRef}>
          <AppProvider>
            <Routes />
          </AppProvider>
        </NavigationContainer>
      </ScreenProvider>
    </SafeAreaProvider>
  );
};

export default App;
