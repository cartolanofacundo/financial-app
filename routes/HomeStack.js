import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Transactions } from '../Components/Transactions/Transactions';
import { TransactionsHistory } from '../Components/TransactionsHistory/TransactionsHistory';
import { Home } from '../Components/Home/Home';
import { CreateAccount } from '../Components/CreateAccount/CreateAccount';

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {

  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="screen">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Transactions" component={Transactions} />
      <HomeStack.Screen name="TransactionsHistory" component={TransactionsHistory} />
      <HomeStack.Screen name="Registrarse" component={CreateAccount} />
    </HomeStack.Navigator>
  );
};
