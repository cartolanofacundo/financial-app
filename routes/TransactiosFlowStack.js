import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryNavigator } from "./CategoryStack";
import { TransactionsNavigator } from "./TransactionsStack";

const TransactionFlowStack = createStackNavigator();

export const TransactionFlowNavigator = () => {
  return (
    <TransactionFlowStack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName="TransactionsNavigator"
    >
      <TransactionFlowStack.Screen
        name="CategoryNavigator"
        component={CategoryNavigator}
      />
      <TransactionFlowStack.Screen
        name="TransactionsNavigator"
        component={TransactionsNavigator}
      />
    </TransactionFlowStack.Navigator>
  );
};
