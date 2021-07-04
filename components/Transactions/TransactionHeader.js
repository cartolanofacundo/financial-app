import React, { useState } from "react";
import { Header } from "react-native-elements";
import { Theme } from "../../Theme/Theme";

export const TransactionHeader = ({
  navigation,
  icon,
  title = "Ingresos",
  onPressFunction,
}) => {
  if (onPressFunction === undefined) {
    onPressFunction = () => navigation.goBack();
  }

  return (
    <Header
      barStyle="default"
      centerComponent={{
        text: title,
        style: {
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
        },
      }}
      containerStyle={{
        backgroundColor: Theme.colors.primary,
        alignItems: "center",
      }}
      leftComponent={{
        icon: icon,
        color: "white",
        fontWeight: "bold",
        size: 25,
        // onPress: () => navigation.goBack(),
        onPress: onPressFunction,
      }}
      leftContainerStyle={{ padding: 5 }}
      placement="center"
    />
  );
};
