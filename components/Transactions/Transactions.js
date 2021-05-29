import React from "react";
import { Button, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default function Transactions({ navigation }) {
  const pressBtn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Button onPress={pressBtn} title="Transactions"></Button>
    </View>
  );
}
