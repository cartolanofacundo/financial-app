import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Select } from '../Components/Categories/Select';


const CategoryStack = createStackNavigator();

export const CategoryNavigator = () => {

  return (
    <CategoryStack.Navigator initialRouteName="Select" headerMode="screen">
      <CategoryStack.Screen name="Select" component={Select} />

    </CategoryStack.Navigator>
  );
};
