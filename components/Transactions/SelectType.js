import { Button, View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
} from "@react-navigation/stack";
import { TransactionsNavigator } from "../../routes/TransactionsStack";

const styles = StyleSheet.create({
  moneyContainer: {
    alignItems: "flex-end",
    backgroundColor: "#2ECC71",
    color: "white",
    maxHeight: 70,
  },
  moneyContainerView: {
    alignItems: "center",
  },
  numberContainer: {
    color: "white",
    fontWeight: "600",
    fontSize: 40,
  },
  eraseButton: {
    height: 100,
    margin: 20,
  },
});

export const SelectType = ({ navigation }) => {
  return (
    <View>
      <TransactionsNavigator />

      {/* <View style={styles.moneyContainer}>
        <View style={styles.moneyContainerView}>
          <Button
            transparent
            style={styles.eraseButton}
            onPress={() =>
              navigation.navigate("Transactions", {
                // title: "Ingresos",
              })
            }
          >
            <Text style={styles.numberContainer}>Ingresos</Text>
          </Button>
        </View>
        <View style={styles.moneyContainerView}>
          <Button
            transparent
            style={styles.eraseButton}
            onPress={() =>
              navigation.navigate("Transactions", {
                // title: "Egresos",
              })
            }
          >
            <Text style={styles.numberContainer}>Egresos</Text>
          </Button>
        </View>
        <View style={styles.moneyContainerView}>
          <Button
            transparent
            style={styles.eraseButton}
            onPress={() => navigation.navigate("Transactions")}
          >
            <Text style={styles.numberContainer}>Ahorros</Text>
          </Button>
        </View>
      </View> */}
    </View>
  );
};
