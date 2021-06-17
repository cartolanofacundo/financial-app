import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransactionsHistory } from "../Components/TransactionsHistory/TransactionsHistory";
import { Home } from "../Components/Home/Home";
import { SelectType } from "../Components/Transactions/SelectType";
import { Transactions } from "../Components/Transactions/Transactions";
import { TransactionDetail } from "../Components/Transactions/TransactionDetail";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="screen">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="SelectType" component={SelectType} />
      <HomeStack.Screen name="Transactions" component={Transactions} />
      <HomeStack.Screen
        name="TransactionsDetail"
        component={TransactionDetail}
      />

      <HomeStack.Screen
        name="TransactionsHistory"
        component={TransactionsHistory}
      />
    </HomeStack.Navigator>
  );
};
