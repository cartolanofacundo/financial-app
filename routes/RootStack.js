import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TransactionStack } from './TransactionStack';
import { NewTransactionScreen } from '../Components/NewTransaction/NewTransactionScreen';
import { AppStack } from './AppStack';

const Stack = createStackNavigator();

export const RootStack = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none" screenOptions={{ animationEnabled: false }}>
        <Stack.Screen
          name="Main"
          component={AppStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="New Transaction"
          component={TransactionStack}
          options={{
            animationEnabled: true,
            cardStyle:{
              backgroundColor: "rgba(0,0,0,0.15)"
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({current: {progress}}) => {
              return{
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
    </NavigationContainer>
  );
}