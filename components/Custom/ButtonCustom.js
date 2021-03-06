import React from "react";
import { Button } from "react-native-elements";
import { Theme } from "../../Theme/Theme";

export const ButtonCustom = ({
  navigation,
  title = "Continuar",
  widthCustom = 150,
  onPressFunction,
  type = "solid",
  icon = {},
  disabled = false,
  disabledStyle = {},
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
        borderColor: Theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={icon}
      type={type}
      disabled={disabled}
      disabledStyle={disabledStyle}
    />
  );
};
