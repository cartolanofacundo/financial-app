import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./routes/HomeStack";
import { LoginNavigator } from "./routes/LoginStack";
import { ThemeProvider } from "react-native-elements";
import { Theme } from "./Theme/Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TransactionsNavigator } from "./routes/TransactionsStack";
import { RootNavigator } from "./routes/Root";
import { AboutUsNavigator } from "./routes/AboutUsStack";

export default function App() {
  const singedIn = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* {singedIn ? <RootNavigator /> : <LoginNavigator />} */}
        {/* <TransactionsNavigator /> */}
        <AboutUsNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
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
