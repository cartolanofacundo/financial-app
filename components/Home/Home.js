import React from "react";
import { Button, View } from "react-native";

export default function Home({ navigation }) {
  const pressBtn = () => {
    navigation.navigate("Transactions");
  };

  return (
    <View>
      <Button onPress={pressBtn} title="hola!"></Button>
    </View>
  );
}
