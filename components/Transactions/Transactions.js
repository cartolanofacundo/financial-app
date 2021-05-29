import React from "react";
import { Button, View } from "react-native";

export default function Transactions({ navigation }) {
  const pressBtn = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Button onPress={pressBtn} title="hola"></Button>
    </View>
  );
}
