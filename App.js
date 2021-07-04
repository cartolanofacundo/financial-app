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
// import { AmountContext } from "./Contexts/AmountContext";

export default function App() {
  const singedIn = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <AmountContext.provider value={0}> */}
        {singedIn ? <RootNavigator /> : <LoginNavigator />}
        {/* <TransactionsNavigator /> */}
        {/* </AmountContext.provider> */}
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
