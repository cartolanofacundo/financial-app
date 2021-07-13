import React , {useContext, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginStack } from "./LoginStack";
import { AuthContext } from "../components/Context/AuthContext";
import { AppStack } from "./AppStack";
import { Loader } from "../components/Loader/Loader";

const Stack = createStackNavigator();

export const RootStack = () => {

  const {status} = useContext(AuthContext)

  return (
    <NavigationContainer>
      {( status === "non-authenticated" ) && <LoginStack />}
      {( status === "authenticated") && <AppStack/>}
      {(status === "waiting" && <Loader/>)}
    </NavigationContainer>
  );
};
