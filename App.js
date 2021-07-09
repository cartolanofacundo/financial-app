import React, {useState} from "react";
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from './Components/Context/UserContext'


export default function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});



  return (
    
    <UserContext.Provider value={{user, setUser, token, setToken}}>
      <NavigationContainer>
        {(token !== null) ? <RootNavigator /> : <LoginNavigator/>}
        {/* <TransactionsNavigator /> */}
        {/* <AboutUsNavigator/> */}
      </NavigationContainer>
    </UserContext.Provider>
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
