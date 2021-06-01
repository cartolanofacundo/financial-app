import React from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";

export const Registration = () => {
  return (
    <View>
      <InputCustom placeholder="Nombre"></InputCustom>

      <InputCustom placeholder="Apellido"></InputCustom>

      <InputCustom placeholder="Email"></InputCustom>

      <InputCustom placeholder="Contraseña"></InputCustom>

      <InputCustom placeholder="Confirmación contraseña"></InputCustom>

      <CheckBox title="Acepto términos y condiciones" />

      <Button
        title="Registrarse"
        buttonStyle={styles.button}
        onPress={handleSubmit}
        loading={loading}
        disabled={buttonDisabled}
      ></Button>
    </View>
  );
};
