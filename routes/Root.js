import React, {useContext, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator } from "./HomeStack";
import { TransactionFlowNavigator } from "./TransactiosFlowStack";
import { LoginNavigator } from "./LoginStack";
import { AuthContext } from "../Components/Context/AuthContext";

const RootStack = createStackNavigator();



export const RootNavigator = () => {

  // useEffect(() => {
  //   validarToken();
  // }, [logedIn])

const {validarToken, logedin} = useContext(AuthContext)
  return (
    <RootStack.Navigator
      // mode="modal"
      headerMode="none"
    >

    {(logedin)? <RootStack.Screen name="Home" component={HomeNavigator} /> : <RootStack.Screen
        name="Login"
        component={LoginNavigator}
      />} 

    </RootStack.Navigator>
  );
};
