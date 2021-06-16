import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Button, Image, Text } from "react-native-elements";
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
      setButtonDisabled(false);
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
      <ImageBackground source={require("../../assets/Imagenes/background.png")} style={styles.background}>
        <Image
          source={require("../../assets/Imagenes/finance.png")}
          style={{ width: 150, height: 150 }}
        />

        <View style={styles.welcomeTextContainer}>
        <Text h4>¡Te damos la bienvenida!</Text>

        <Text>Logueate para continuar</Text>

        </View>

        

        
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  hasNotAccount: {
    marginRight: 5,
    fontWeight: "bold",
  },
  button: {
    width: 200,
    margin: 15,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: Theme.colors.primary,
  },
  registration: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginTop: 25,

  },
  vinculoRegistrarse: {
    color: Theme.colors.primary,
    fontWeight: "bold",
  },
  background: {
    // flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
  },
  welcomeTextContainer: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: "center",
  }
});
