import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Components/Home/Home';
import { User } from '../Components/User/User';

const UserStack = createStackNavigator();

export const UserNavigator = () => {
  
  return (
    <UserStack.Navigator initialRouteName="Home" headerMode="none">
      <UserStack.Screen name="User" component={User} />
    </UserStack.Navigator>
  );
};