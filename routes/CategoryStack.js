import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateCategory } from "../Components/Categories/CreateCategory";
import { SelectCategory } from "../Components/Categories/SelectCategory";

const CategoryStack = createStackNavigator();

export const CategoryNavigator = () => {
  return (
    <CategoryStack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName="SelectCategory"
    >
      <CategoryStack.Screen name="CreateCategory" component={CreateCategory} />
      <CategoryStack.Screen name="SelectCategory" component={SelectCategory} />
    </CategoryStack.Navigator>
  );
};
