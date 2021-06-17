import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon, Input } from "react-native-elements";
import { Theme } from "../../Theme/Theme";

const styles = StyleSheet.create({
  moneyContainer: {
    backgroundColor: Theme.colors.primary,
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 60,
    marginBottom: 60,
  },
  // moneyContainerView: {
  //   alignItems: "center",
  // },
  // numberContainer: {
  //   color: "white",
  //   fontWeight: "600",
  //   fontSize: 40,
  // },
});

export const TransactionInsert = ({ value }) => {
  // export const TransactionInsert = () => {
  const [importe, setImporte] = useState(0);

  return (
    <View style={styles.moneyContainer}>
      <Input
        value={value}
        containerStyle={{ width: 50, color: "white" }}
        inputContainerStyle={{}}
        inputStyle={{}}
      />
      <Icon
        color="red"
        name="backspace"
        onLongPress={() => console.log("onLongPress()")}
        onPress={() => console.log("onPress()")}
        size={40}
        type="material"
      />
    </View>
  );
};
