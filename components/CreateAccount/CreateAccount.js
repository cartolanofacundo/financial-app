import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Button, Image, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";
import { InputCustom } from "../Custom/InputCustom";

export const CreateAccount = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  
  const [errorMessageMail, setErrorMessageMail] = useState("");
  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageLast, setErrorMessageLast] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [errorMessageRptPassword, setErrorMessageRptPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [rptPassword, setRptPassword] = useState("")

  const handleSubmit = () => {
    if (name === "" || last === "" || email === "" || password === "" || password != rptPassword) {
      setErrorMessage("Error al ingresar los datos");
    } else {
      setErrorMessagePassword("");
      setButtonDisabled(false);
      setLoading(true);
    }
  };
  const handleOnchangeMail = (e) => {
    setEmail(...(email + e));
    if (email === "") {
      setErrorMessageMail("El email es requerido");
    } else {
      setErrorMessageMail("");
    }
  };

  const handleOnchangeName = (e) => {
      setName(...(name + e));
      if (name === "") {
        setErrorMessageName("El nombre es requerido");
      } else {
        setErrorMessageName("");
      }
  };

  const handleOnchangeLast = (e) => {
    setLast(...(last + e));
    if (last === "") {
      setErrorMessageLast("El apellido es requerido");
    } else {
      setErrorMessageLast("");
    }
};

const handleOnchangePassword = (e) => {
  setPassword(...(password + e));
  if (password === "") {
    setErrorMessagePassword("La contraseña es requerida");
  } else {
    setErrorMessagePassword("");
  }
};

const handleOnchangeRptPassword = (e) => {
  setRptPassword(...(rptPassword + e));
  if (rptPassword === "" || password != rptPassword) {
    setErrorMessageRptPassword("Las contraseñas no coinciden");
  } else {
    setErrorMessageRptPassword("");
  }
};


  const navigateTo = (ruta) => {
    navigation.navigate(ruta);
  };

  return (
    <View style={styles.container}>

        <View style={styles.welcomeTextContainer}>
        <Text h4>¡Te damos la bienvenida!</Text>

        <Text>Registrate</Text>

        </View>

        

        <InputCustom
          placeholder="Nombre"
          renderErrorMessage={errorMessage}
          leftIcon={<Icon name="account" size={26} />}
          onChangeText={handleOnchangeName}
        ></InputCustom><InputCustom
        placeholder="Apellido"
        renderErrorMessage={errorMessage}
        leftIcon={<Icon name="account" size={26} />}
        onChangeText={handleOnchangeLast}
      ></InputCustom>
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
          onChangeText={handleOnchangePassword}
        ></InputCustom>
        <InputCustom
          placeholder="Repetir contraseña"
          secureTextEntry={true}
          renderErrorMessage={errorMessage}
          leftIcon={<Icon name="key" size={26} />}
          onChangeText={handleOnchangeRptPassword}
        ></InputCustom>
        <Button
          title="Crear cuenta"
          buttonStyle={styles.button}
          onPress={handleSubmit}
          loading={loading}
        ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
