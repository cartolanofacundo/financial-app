import React , {useContext, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginStack } from "./LoginStack";
import { AuthContext } from "../components/Context/AuthContext";
import { AppStack } from "./AppStack";

const Stack = createStackNavigator();

export const RootStack = () => {

  const {status} = useContext(AuthContext)

  return (
    <NavigationContainer>
      {( status === "non-authenticated" ) ? <LoginStack /> : <AppStack/>}
    </NavigationContainer>
  );
};
