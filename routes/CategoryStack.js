import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Select } from '../Components/Categories/Select';
import { CreateCategory } from '../Components/Categories/CreateCategory';


const CategoryStack = createStackNavigator();

export const CategoryNavigator = () => {

  return (
    <CategoryStack.Navigator initialRouteName="Select" headerMode="none" mode="modal">
      <CategoryStack.Screen name="Select" component={Select} />
      <CategoryStack.Screen name="CreateCategory" component={CreateCategory} />


    </CategoryStack.Navigator>
  );
};
