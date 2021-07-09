import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../Components/Login/Login';
import {CreateAccount} from '../Components/CreateAccount/CreateAccount';

const LoginStack = createStackNavigator();

export const LoginNavigator = ({setToken}) => {
  
  return (
    <LoginStack.Navigator initialRouteName="Login" headerMode="none">
      <LoginStack.Screen name="Login" component={Login} setToken= {setToken}/>
      <LoginStack.Screen name="Registrarse" component={CreateAccount} />
    </LoginStack.Navigator>
  );
};

