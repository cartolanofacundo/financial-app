import { Button, View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2ECC71",
    height: 60,
    marginBottom: 60,
    paddingTop: 20,
  },
  titleContainer: {
    color: "white",
    fontSize: 30,
  },
});

export const TransactionHedaer = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titleContainer}>{title}</Text>
    </View>
  );
};
