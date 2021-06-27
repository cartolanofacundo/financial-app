import React from "react";
import { View, StyleSheet } from "react-native";
import { InputCustom } from "../Custom/InputCustom";
import { Button } from "react-native-elements";
import { TransactionHeader } from "./TransactionHeader";
import { Theme } from "../../Theme/Theme";

export const TransactionHome = ({ navigation }) => {
  const title = "Egresos";

  return (
    <View style={{ flex: 1 }}>
      <TransactionHeader navigation={navigation} icon="close" />

      <View style={styles.container}>
        <InputCustom />
        <Button
          title="continuar"
          onPress={() => navigation.navigate("TransactionDetail")}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    margin: 15,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: Theme.colors.primary,
  },
});
