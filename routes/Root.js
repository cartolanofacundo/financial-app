import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator } from "./HomeStack";
import { TransactionFlowNavigator } from "./TransactiosFlowStack";

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      // mode="modal"
      headerMode="none"
    >
      <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />

      <RootStack.Screen
        name="TransactionFlowNavigator"
        component={TransactionFlowNavigator}
      />
    </RootStack.Navigator>
  );
};
