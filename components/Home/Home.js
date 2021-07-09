import React, { useState, useContext } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { UserContext } from "../Context/UserContext";

export const Home = ({ navigation }) => {
  const {token, user, setToken} = useContext(UserContext)
  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={() => setToken(null)}
      />
      <Text>{JSON.stringify(token)}</Text>
      <Text>{JSON.stringify(user)}</Text>
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
