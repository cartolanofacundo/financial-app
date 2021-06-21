import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Transactions } from "../Components/Transactions/Transactions";
import { TransactionDetail } from "../Components/Transactions/TransactionDetail";
import { SelectType } from "../Components/Transactions/SelectType";
import { CalendarCustom } from "../Components/Transactions/CalendarCustom";
import { TransactionComplete } from "../Components/Transactions/TransactionComplete";

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
      <TransactionsStack.Screen name="Calendar" component={CalendarCustom} />
      <TransactionsStack.Screen
        name="TransactionComplete"
        component={TransactionComplete}
      />
    </TransactionsStack.Navigator>
  );
};
