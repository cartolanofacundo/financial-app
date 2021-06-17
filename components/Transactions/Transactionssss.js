import React from "react";
import { Button, View, StyleSheet } from "react-native";

export const Transactionsssss = ({ navigation }) => {
  const pressBtn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Button onPress={pressBtn} title="Transactions"></Button>
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
