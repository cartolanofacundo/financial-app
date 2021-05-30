import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export const CreateAccount = ({ navigation }) => {

  const pressBtn = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Button onPress={pressBtn} title="Login"></Button>
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