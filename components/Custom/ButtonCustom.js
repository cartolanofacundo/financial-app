import React from "react";
import { Button } from "react-native-elements";
import { Theme } from "../../Theme/Theme";

export const ButtonCustom = ({
  navigation,
  title = "Continuar",
  widthCustom,
  onPressFunction,
  type = "solid",
}) => {
  return (
    <Button
      title={title}
      onPress={onPressFunction}
      buttonStyle={{
        width: widthCustom,
        margin: 10,
        borderRadius: 30,
        paddingVertical: 10,
        backgroundColor: Theme.colors.primary,
      }}
      type={type}
    />
  );
};
