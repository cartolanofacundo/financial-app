import React, { useState } from "react";
import { ThemeProvider, SafeAreaProvider, Text } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";

export const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const handleSubmit = () => {
    if (email === "") {
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
        source={{
          uri: "https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png",
        }}
        style={{ width: 200, height: 200 }}
      />

      <Image
        containerStyle={{}}
        onLongPress={() => console.log("onLongPress()")}
        onPress={() => console.log("onPress()")}
        placeholderStyle={{}}
        transitionDuration={1000}
        source={{
          uri: "https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png",
        }}
        style={{ width: 200, height: 200 }}
      />

      <Input
        placeholder="Email"
        placeholderTextColor="#b9b5b6"
        renderErrorMessage="El email es requerido"
        leftIcon={<Icon name="email" size={26} />}
        leftIconContainerStyle={styles.leftIcon}
        inputContainerStyle={
          emailFocus ? styles.inputFocused : styles.inputContainer
        }
        containerStyle={styles.formContainer}
        errorMessage={errorMessage}
        onChangeText={handleOnchangeMail}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
        errorStyle={styles.error}
      ></Input>
      <Input
        placeholder="Contraseña"
        placeholderTextColor="#b9b5b6"
        secureTextEntry={true}
        renderErrorMessage="La contraseña es requerida"
        leftIcon={<Icon name="key" size={26} />}
        leftIconContainerStyle={styles.leftIcon}
        containerStyle={styles.formContainer}
        inputContainerStyle={
          passwordFocus ? styles.inputFocused : styles.inputContainer
        }
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
      ></Input>
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
  formContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  hasNotAccount: {
    margin: 10,
    marginVertical: 50,
    color: "blue",
  },
  inputContainer: {
    borderColor: "transparent",
    color: "black",
    backgroundColor: "#f3efee",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
  },
  inputFocused: {
    borderColor: Theme.colors.primary,
    color: "black",
    backgroundColor: "#f3efee",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
  },
  leftIcon: {
    marginRight: 10,
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
  error: {
    paddingLeft: 20,
  },
});
