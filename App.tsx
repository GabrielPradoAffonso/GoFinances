import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/Global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import { SafeAreaView } from 'react-native';
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
        <ThemeProvider theme={theme}>
          <Register />
        </ThemeProvider>
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      </SafeAreaView>
    </>
  );
}
