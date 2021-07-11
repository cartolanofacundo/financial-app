import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Components/Login/LoginScreen'
import { CreateAccountScreen } from '../Components/CreateAccount/CreateAccountScreen'

const Stack = createStackNavigator();

export const LoginStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Log In">
                <Stack.Screen name="Log In" component={LoginScreen} />
                <Stack.Screen name="Registrarse" component={CreateAccountScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
