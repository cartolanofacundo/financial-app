import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateAccountScreen } from '../components/CreateAccount/CreateAccountScreen'
import { LoginScreen } from '../components/Login/LoginScreen';

const Stack = createStackNavigator();

export const LoginStack = () => {
    return (
        <Stack.Navigator initialRouteName="Log In" headerMode="none">
            <Stack.Screen name="Log In" component={LoginScreen} />
            <Stack.Screen name="Registrarse" component={CreateAccountScreen} />
        </Stack.Navigator>
    )

}
