import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountsScreen } from "../components/NewTransaction/Accounts/AccountsScreen";
import { CategoriesScreen } from "../components/NewTransaction/Categories/CategoriesScreen";
import { DetailsScreen } from "../components/NewTransaction/Details/DetailsScreen";
import { CalculatorScreen } from "../components/NewTransaction/Calculator/CalculatorScreen";
import { NewTransactionScreen } from "../components/NewTransaction/OverlayButtons/NewTransactionScreen";
import { TransactionProvider } from "../components/Context/TransactionContext";
const Stack = createStackNavigator();

const TransactionState = ({ children }) => {
  return (
    <TransactionProvider>
      {children}
    </TransactionProvider>
  )

}

export const TransactionStack = () => {
  return (
    <TransactionState>
      <Stack.Navigator
        initialRouteName="buttons"
        mode="modal"
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
      >
        <Stack.Screen name="Transaction detail" component={DetailsScreen} />
        <Stack.Screen
          name="Accounts"
          component={AccountsScreen}
          options={{
            animationEnabled: true,
            cardStyle: {
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  backgroundColor: "transparent",
                  // opacity: progress.interpolate({
                  //   inputRange: [0, 0.5, 0.9, 1],
                  //   outputRange: [0, 0.25, 0.7, 1]
                  // })
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            animationEnabled: true,
            cardStyle: {
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  backgroundColor: "transparent",
                  // opacity: progress.interpolate({
                  //   inputRange: [0, 0.5, 0.9, 1],
                  //   outputRange: [0, 0.25, 0.7, 1]
                  // })
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{
            animationEnabled: true,
            cardStyle: {
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  backgroundColor: "transparent",
                  // opacity: progress.interpolate({
                  //   inputRange: [0, 0.5, 0.9, 1],
                  //   outputRange: [0, 0.25, 0.7, 1]
                  // })
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="buttons"
          component={NewTransactionScreen}
          options={{
            animationEnabled: true,
            cardStyle: {
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  backgroundColor: "transparent",
                  // opacity: progress.interpolate({
                  //   inputRange: [0, 0.5, 0.9, 1],
                  //   outputRange: [0, 0.25, 0.7, 1]
                  // })
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </TransactionState>
  );
};
