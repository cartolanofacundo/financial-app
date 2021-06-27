import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator } from "./HomeStack";
import { TransactionsNavigator } from "./TransactionsStack";

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />

      <RootStack.Screen
        name="TransactionsNavigator"
        component={TransactionsNavigator}
      />
    </RootStack.Navigator>
  );
};
