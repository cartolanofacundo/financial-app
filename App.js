import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './routes/HomeStack';
import { LoginNavigator } from './routes/LoginStack';

export default function App() {

  const singedIn = true;

  return (
    <NavigationContainer>
      {singedIn ? (<HomeNavigator/>) : (<LoginNavigator/>)}
    </NavigationContainer>
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
