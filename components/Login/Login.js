import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default Login =({ navigation }) => {
  const pressBtn = () => {
    navigation.navigate("Registrarse");
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
      <Button onPress={pressBtn} title="CreateAccount"></Button>
    </View>
  );
}