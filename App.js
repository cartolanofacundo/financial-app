import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './routes/HomeStack';
import { LoginNavigator } from './routes/LoginStack';
import { ThemeProvider } from 'react-native-elements';
import { Theme } from './Theme/Theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const singedIn = true;

  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          {singedIn ? (<HomeNavigator />) : (<LoginNavigator />)}
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
