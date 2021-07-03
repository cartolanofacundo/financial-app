import React from "react";
import { View, StyleSheet } from "react-native";
import { InputCustom } from "../Custom/InputCustom";
import { Button, Icon } from "react-native-elements";
import { TransactionHeader } from "./TransactionHeader";
import { Theme } from "../../Theme/Theme";
import { useContext } from "react";
import { AmountContext } from "../../Contexts/AmountContext";

export const TransactionHome = ({ navigation }) => {
  const title = "Egresos";

  const amountContext = useContext(AmountContext);

  const handleOnchange = (value) => {
    console.log("hola");
  };

  return (
    <View style={{ flex: 1 }}>
      <TransactionHeader navigation={navigation} icon="close" />
      <Text>{amountContext}</Text>
      <View style={styles.container}>
        <InputCustom
          // placeholder="Ingresar monto"
          placeholder={amountContext}
          placeholderTextColor="#b9b5b6"
          leftIcon={<Icon name="dollar-sign" />}
          onChangeText={handleOnchange}
        />
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
