import { View } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TransactionHedaer } from "./TransactionHedaer";
import { TransactionInsert } from "./TransactionInsert";
import { Calculator } from "./Calculator";
import calculate, { initialState } from "./calculate";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#2ECC71",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 100,
  },
  insertContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
});

export const Transactions = ({ navigation, route }) => {
  const [state, setState] = useState(initialState);

  // const title = route.params.title;

  const title = "Titutlo";
  const isInDetails = false;

  const handleTap = (type, value) => {
    setState((state) => calculate(type, value, state));
  };

  return (
    <View style={styles.mainContainer}>
      <TransactionHedaer title={title} />
      <TransactionInsert
        value={parseFloat(state.currentValue).toLocaleString()}
        style={styles.insertContainer}
        isInDetails={isInDetails}
      />
      <Calculator onPressFunction={handleTap} navigation={navigation} />
    </View>
  );
};
