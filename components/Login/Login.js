import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export const Login =({ navigation }) => {

  const pressBtn = () => {
    navigation.navigate("Registrarse");
  };

  return (
    <View style={styles.container}>
      <Button onPress={pressBtn} title="CreateAccount"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
