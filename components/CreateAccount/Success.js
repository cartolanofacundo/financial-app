import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Button, Image, Overlay, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";

export const Success = ({ navigation, show, toggleModal }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [navegando, setNavegando] = useState(false)
  const handleSubmit = () => {
    setNavegando(true)
    navigateTo("Log In")

  };
  
  const navigateTo = (ruta) => {
    navigation.navigate(ruta);
  };

  return (
    <Overlay style={styles.container} isVisible={(navegando) ? false : show} fullScreen= {true}>
      <ImageBackground source={require("../../assets/Imagenes/background.png")} style={styles.background}>
        <Image
          source={require("../../assets/Imagenes/finance.png")}
          style={{ width: 150, height: 150 }}
        />

        <View style={styles.welcomeTextContainer}>
        <Text h4>¡Creaste tu cuenta!</Text>

        <Image
          source={require("../../assets/Imagenes/success.png")}
          style={{ width: 150, height: 150, marginVertical: 20 }}
        />

        <Text style={{fontSize: 17}}>Logueate para continuar</Text>

        </View>

        <Button
          title="Ingresar"
          buttonStyle={styles.button}
          onPress={handleSubmit}
          loading={loading}
        ></Button>
      </ImageBackground>
    </Overlay>
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
