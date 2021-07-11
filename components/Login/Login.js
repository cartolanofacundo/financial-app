import React, { useState, useContext } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Button, Image, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";
import { InputCustom } from "../Custom/InputCustom";
import * as Yup from "yup";
import { useFormik } from "formik";
import jwt_decode from "jwt-decode";
import { UserContext } from "../Context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../Context/AuthContext";

export const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessageServer, setErrorMessageServer] = useState("");

  //const {setToken, setUser } = useContext(UserContext);
  const {setLogedin, validarToken, user, setUser } = useContext(AuthContext);
  const saveToken = async (token) => {
    try {
      const jsonValue = JSON.stringify(token);
      await AsyncStorage.setItem("token", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const handleResponse = (response) => {
    if (response === "Credenciales no validas") {
      setErrorMessageServer(response);
      setShowError(true);
      setLoading(false);
    } else {
      setShowError(false);
      setLoading(false);
      //setToken(response.token);
      saveToken(response.token);
      validarToken();
      setUser(response.user);

      //   let decoded = jwt_decode(token, { complete: true });
      //   console.log(token.complete);
      //   if (typeof decoded === "object") {
      //     console.log("Hubo un error");
      //   } else {
      //     console.log("Somos Yisus");
      //   }

      //   console.log(decoded);
    }
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("El email no es válido")
      .required("El mail es requerido"),
    password: Yup.string()
      .required("ingrese una contraseña")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "La contraseña es inválida"
      ),
  });

  const { values, isSubmiting, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        setLoading(true);
        //console.log(JSON.stringify(errors) === "{}"); //esta es la respuesta. Si no hay errores se puede hacer el submit
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          email: values.email,
          password: values.password,
        });

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://morning-meadow-12976.herokuapp.com/api/users/login",
          requestOptions
        )
          .then((response) => response.json())
          .then((user) => handleResponse(user))
          .catch((error) => console.log("error", error));
      },
      validationSchema: loginValidationSchema,
      validateOnChange: true,
    });

  const navigateTo = (ruta) => {
    navigation.navigate(ruta);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/Imagenes/background.png")}
        style={styles.background}
      >
        <Image
          source={require("../../assets/Imagenes/finance.png")}
          style={{ width: 150, height: 150 }}
        />

        <View style={styles.welcomeTextContainer}>
          <Text h4>¡Te damos la bienvenida!</Text>

          <Text>Logueate para continuar</Text>
        </View>

        <InputCustom
          type="email"
          name="email"
          placeholder="Email"
          renderErrorMessage={errors.email}
          leftIcon={<Icon name="email" size={26} />}
          onChangeText={(text) => setFieldValue("email", text)}
        ></InputCustom>
        <InputCustom
          type="password"
          name="password"
          placeholder="Contraseña"
          secureTextEntry={true}
          renderErrorMessage={errors.password}
          leftIcon={<Icon name="key" size={26} />}
          leftIconContainerStyle={styles.leftIcon}
          onChangeText={(text) => setFieldValue("password", text)}
        ></InputCustom>
        {showError == true ? (
          <Text style={{ color: "red" }}>{resultadoNuestro}</Text>
        ) : null}
        <Button
          title="Ingresar"
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit}
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
  },
});
