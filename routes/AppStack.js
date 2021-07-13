import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransactionStack } from "./TransactionStack";
import { HomeStack } from "./HomeStack";
import { NewTransactionScreen } from "../components/NewTransaction/OverlayButtons/NewTransactionScreen";
import { UserProvider } from "../components/Context/UserContext";
import { TransactionProvider } from "../components/Context/TransactionContext";

const UserState = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )

}

const Stack = createStackNavigator()

export const AppStack = () => {
    return (
        <UserState>
                <Stack.Navigator
                    mode="modal"
                    headerMode="none"
                    screenOptions={{ animationEnabled: false }}
                >
                    <Stack.Screen
                        name="Main"
                        component={HomeStack}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="New Transaction"
                        component={TransactionStack}
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
                                    },
                                };
                            },
                        }}
                    />
                </Stack.Navigator>
        </UserState>
    )
}
