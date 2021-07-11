import React, { useState, useContext } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { UserContext } from "../Context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../Context/AuthContext";

export const Home = ({ navigation }) => {
  // const {token, user, setToken} = useContext(UserContext)
  const {validarToken} = useContext(AuthContext)

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
      validarToken()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }


  return (
    <View style={styles.container}>
      <Button
        title="Logout"
        onPress={() => clearAll()}
      />
      {/* <Text>{JSON.stringify(token)}</Text> */}
      {/* <Text>{JSON.stringify(user)}</Text> */}
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
