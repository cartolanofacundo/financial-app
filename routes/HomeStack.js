import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transactions from "../components/Transactions/Transactions";
import Home from "../components/Home/Home";

const HomeStack = createStackNavigator();
export default myStacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="screen">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Transactions" component={Transactions} />
    </HomeStack.Navigator>
  );
};
