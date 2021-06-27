import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Transacciones"
        onPress={() => navigation.navigate("TransactionsNavigator")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
