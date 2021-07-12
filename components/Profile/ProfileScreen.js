import React, {useContext} from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Button, Image, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";
import { InputCustom } from "../Custom/InputCustom";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { AuthContext } from "../Context/AuthContext";

export const ProfileScreen = ({ navigation }) => {

  const { logOut } = useContext(AuthContext)
  // let usuarioAux = JSON.parse(JSON.stringify(user));
  let usuarioAux = {};

  // const tokenAux = getToken();

  // const tokenCompleto = ("Bearer " + JSON.stringify(tokenAux));

  const navigateTo = (ruta) => {
    navigation.navigate(ruta);
  };

  const registerValidationSchema = Yup.object().shape({
    name: Yup.string(),
    last: Yup.string(),
    password: Yup.string().matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "La contraseña debe tener 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
    ),
    repeatPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Las contraseñas deben coincidir"
    ),
  });

  const { values, isSubmiting, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: usuarioAux.name,
        last: usuarioAux.last,
        password: usuarioAux.password,
        repeatPassword: usuarioAux.password,
      },
      onSubmit: (values) => {
        console.log(JSON.stringify(errors) === "{}"); //esta es la respuesta. Si no hay errores se puede hacer el submit

        let myHeaders = new Headers();
        // myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          first: values.name,
          last: values.last,
          email: values.email,
          password: values.password,
          repeat_password: values.repeatPassword,
          id: values.id,
        });

        let requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://morning-meadow-12976.herokuapp.com/api/users/60dcf2452894d90015e29e1f",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      validationSchema: registerValidationSchema,
      validateOnChange: true,
    });


  return (
    <View style={styles.container}>
      <View style={styles.logout}>
        <Button
          title="X Logout"
          buttonStyle={styles.LogoutButton}
          onPress={logOut}
        ></Button>
      </View>

      <View style={styles.welcomeTextContainer}>
        <Text h4>Modificá tus datos</Text>
      </View>

      <InputCustom
        type="name"
        name="name"
        placeholder="Nombre"
        renderErrorMessage={errors.name}
        leftIcon={<Icon name="account" size={26} />}
        onChangeText={(text) => setFieldValue("name", text)}
        value={values.name}
      ></InputCustom>

      <InputCustom
        type="last"
        name="last"
        placeholder="Apellido"
        renderErrorMessage={errors.last}
        leftIcon={<Icon name="account" size={26} />}
        onChangeText={(text) => setFieldValue("last", text)}
        value={values.last}
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
        value={values.password}
      ></InputCustom>
      <InputCustom
        type="repeatPassword"
        name="repeatPassword"
        placeholder="Repetir contraseña"
        secureTextEntry={true}
        renderErrorMessage={errors.repeatPassword}
        leftIcon={<Icon name="key" size={26} />}
        onChangeText={(text) => setFieldValue("repeatPassword", text)}
        value={values.repeatPassword}
      ></InputCustom>

      <Button
        title="Enviar"
        buttonStyle={styles.button}
        onPress={handleSubmit}
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
  logout: {
    marginBottom: 50,
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
  LogoutButton: {
    width: 200,
    margin: 15,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: "red",
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
    resizeMode: "cover",
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: "center",
  },
  welcomeTextContainer: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: "center",
  },
});
