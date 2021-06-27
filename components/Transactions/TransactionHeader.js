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
          color: Theme.colors.primary,
          fontSize: 25,
          fontWeight: "bold",
        },
      }}
      containerStyle={{
        backgroundColor: "white",
        alignItems: "center",
      }}
      leftComponent={{
        icon: icon,
        color: Theme.colors.primary,
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
