import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default CreateAccount =({ navigation }) => {
  const pressBtn = () => {
    navigation.navigate("Login");
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Button onPress={pressBtn} title="Login"></Button>
    </View>
  );
}