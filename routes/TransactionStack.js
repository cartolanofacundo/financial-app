import React, { UseContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewTransactionScreen } from '../Components/NewTransaction/NewTransactionScreen'
import { AccountsScreen } from '../Components/NewTransaction/Accounts/AccountsScreen';
import { CategoriesScreen } from '../Components/NewTransaction/Categories/CategoriesScreen';
import { DetailsScreen } from '../Components/NewTransaction/Details/DetailsScreen';
import { CalculatorScreen } from '../Components/NewTransaction/Calculator/CalculatorScreen';
import { NewTransactionContext } from '../Components/Context/NewTransactionContext';

const Stack = createStackNavigator();

export const TransactionStack = () => {

  

  return (
    <NewTransactionContext.Provider value={}>
      <Stack.Navigator initialRouteName="buttons" mode="modal" headerMode="none" screenOptions={{ animationEnabled: false }}>
        <Stack.Screen name="buttons" component={NewTransactionScreen} options={{
          animationEnabled: true,
          cardStyle: {
            backgroundColor: "rgba(0,0,0,0.15)"
          },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                backgroundColor: "transparent"
                // opacity: progress.interpolate({
                //   inputRange: [0, 0.5, 0.9, 1],
                //   outputRange: [0, 0.25, 0.7, 1]
                // })
              },
            }
          }
        }} />
        <Stack.Screen name="Transaction detail" component={DetailsScreen} />
        <Stack.Screen name="Accounts" component={AccountsScreen} options={{
          animationEnabled: true,
          cardStyle: {
            backgroundColor: "rgba(0,0,0,0.15)"
          },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                backgroundColor: "transparent"
                // opacity: progress.interpolate({
                //   inputRange: [0, 0.5, 0.9, 1],
                //   outputRange: [0, 0.25, 0.7, 1]
                // })
              },
            }
          }
        }} />
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{
          animationEnabled: true,
          cardStyle: {
            backgroundColor: "rgba(0,0,0,0.15)"
          },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                backgroundColor: "transparent"
                // opacity: progress.interpolate({
                //   inputRange: [0, 0.5, 0.9, 1],
                //   outputRange: [0, 0.25, 0.7, 1]
                // })
              },
            }
          }
        }} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{
          animationEnabled: true,
          cardStyle: {
            backgroundColor: "rgba(0,0,0,0.15)"
          },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                backgroundColor: "transparent"
                // opacity: progress.interpolate({
                //   inputRange: [0, 0.5, 0.9, 1],
                //   outputRange: [0, 0.25, 0.7, 1]
                // })
              },
            }
          }
        }} />
      </Stack.Navigator>
    </NewTransactionContext.Provider>


  );
}