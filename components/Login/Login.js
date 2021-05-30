import React, { useState } from "react";
import { ThemeProvider, SafeAreaProvider, Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Button, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";
import { InputCustom } from "../Custom/InputCustom";

export const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setErrorMessage("El email es requerido");
    } else {
      setErrorMessage("");
      setLoading(true);
    }
  };
  const handleOnchangeMail = (e) => {
    setEmail(...(email + e));
    if (email === "") {
      setErrorMessage("El email es requerido");
    } else {
      setErrorMessage("");
    }
  };
  const navigateTo = (ruta) => {
    navigation.navigate(ruta);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Imagenes/google-wallet.png")}
        style={{ width: 200, height: 200 }}
      />

      <InputCustom
        placeholder="Email"
        renderErrorMessage={errorMessage}
        leftIcon={<Icon name="email" size={26} />}
        onChangeText={handleOnchangeMail}
      ></InputCustom>
      <InputCustom
        placeholder="Contraseña"
        secureTextEntry={true}
        renderErrorMessage={errorMessage}
        leftIcon={<Icon name="key" size={26} />}
        leftIconContainerStyle={styles.leftIcon}
      ></InputCustom>
      <Button
        title="Ingresar"
        buttonStyle={styles.button}
        onPress={handleSubmit}
        loading={loading}
        disabled={buttonDisabled}
      ></Button>

      <View style={styles.registration}>
        <Text style={styles.hasNotAccount}>¿No tenés cuenta?</Text>
        <Text
          onPress={() => navigateTo("Registrarse")}
          style={styles.vinculoRegistrarse}
        >
          Registrarse
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  hasNotAccount: {
    margin: 10,
    marginVertical: 50,
    color: "blue",
  },
  button: {
    width: 200,
    margin: 20,
    borderRadius: 30,
  },
  registration: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  vinculoRegistrarse: {
    color: "red",
  },
});
