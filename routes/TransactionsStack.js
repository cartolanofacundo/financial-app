import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Transactions } from "../Components/Transactions/Transactions";
import { TransactionDetail } from "../Components/Transactions/TransactionDetail";
import { SelectType } from "../Components/Transactions/SelectType";

const TransactionsStack = createStackNavigator();

export const TransactionsNavigator = () => {
  return (
    <TransactionsStack.Navigator
      initialRouteName="Transactions"
      headerMode="screen"
    >
      {/* <TransactionsStack.Screen name="SelectType" component={SelectType} /> */}
      <TransactionsStack.Screen name="Transactions" component={Transactions} />
      <TransactionsStack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
      />
    </TransactionsStack.Navigator>
  );
};
