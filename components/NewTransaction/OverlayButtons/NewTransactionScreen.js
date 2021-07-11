import React from "react";
import { View, Text, TouchableHighlight, Dimensions } from "react-native";
import { Button, Icon } from "react-native-elements";
import { Theme } from "../../../Theme/Theme";

export const NewTransactionScreen = ({ navigation }) => {
  const handleNavigation = (ruta) => {
    navigation.replace(ruta);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: Dimensions.get("window").width,
        minHeight: Dimensions.get("window").height,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: Dimensions.get("window").width,
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title="Egreso"
            icon={
              <Icon
                type="materialicons"
                name="trending-down"
                color="red"
                raised
                containerStyle={{ backgroundColor: "white", borderRadius: 50 }}
              />
            }
            buttonStyle={{
              backgroundColor: "transparent",
              flexDirection: "column",
            }}
            titleStyle={{ color: "white", fontSize: 15, fontWeight: "100" }}
            containerStyle={{}}
            onPress={() => handleNavigation("Transaction detail")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            title="Ingreso"
            icon={
              <Icon
                type="materialicons"
                name="trending-up"
                color="green"
                raised
                containerStyle={{ backgroundColor: "white", borderRadius: 50 }}
              />
            }
            buttonStyle={{
              backgroundColor: "transparent",
              flexDirection: "column",
              marginBottom: 20,
            }}
            titleStyle={{ color: "white", fontSize: 15, fontWeight: "100" }}
            containerStyle={{ marginBottom: 20 }}
            onPress={() => handleNavigation("Transaction detail")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Button
            containerStyle={{ borderRadius: 50 }}
            title="Transferencia"
            buttonStyle={{
              backgroundColor: "transparent",
              flexDirection: "column",
            }}
            icon={
              <Icon
                type="materialicons"
                name="sync-alt"
                color="orange"
                raised
                containerStyle={{ backgroundColor: "white", borderRadius: 50 }}
              />
            }
            titleStyle={{ color: "white", fontSize: 10, fontWeight: "100" }}
            onPress={console.log("tocando transacciones")}
          />
        </View>
      </View>
      <TouchableHighlight
        style={{
          top: -17,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 35,
        }}
        onPress={() => navigation.goBack()}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: Theme.colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon type="material" name="close" size={35} color="white" />
        </View>
      </TouchableHighlight>
    </View>
  );
};
