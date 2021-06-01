import React from "react";
import { View } from "react-native";

export const Registration = () => {
  return (
    <View>
      <InputCustom placeholder="Nombre"></InputCustom>
      <InputCustom placeholder="Apellido"></InputCustom>
      <InputCustom placeholder="Email"></InputCustom>
      <InputCustom placeholder="Contraseña"></InputCustom>
      <InputCustom placeholder="Confirmación contraseña"></InputCustom>
    </View>
  );
};
