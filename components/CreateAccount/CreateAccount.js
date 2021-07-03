import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Button, Image, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";
import { InputCustom } from "../Custom/InputCustom";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

export const CreateAccount = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const navigateTo = (ruta) => {
    navigation.navigate(ruta);
  };

  const registerValidationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido"),
    last: Yup.string().required("El apellido es requerido"),
    email: Yup.string()
      .email("El email no es válido")
      .required("El mail es requerido"),
    password: Yup.string()
    .required("ingrese una contraseña")
    // .min(8)
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "La contraseña debe tener 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
    ),
    repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir'),
  });

  const { values, isSubmiting, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        name: "",
        last: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      onSubmit: (values) => {
        console.log(JSON.stringify(errors) === '{}') //esta es la respuesta. Si no hay errores se puede hacer el submit
      },
      validationSchema: registerValidationSchema,
      validateOnChange: true,
    });

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text h4>¡Te damos la bienvenida!</Text>

        <Text>Registrate</Text>
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
        type="email"
        name="email"
        placeholder="Email"
        renderErrorMessage={errors.email}
        leftIcon={<Icon name="email" size={26} />}
        onChangeText={(text) => setFieldValue("email", text)}
        value={values.email}
      ></InputCustom>
      <InputCustom
        type="password"
        name="password"
        placeholder="Contraseña"
        secureTextEntry={false}
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
        secureTextEntry={false}
        renderErrorMessage={errors.repeatPassword}
        leftIcon={<Icon name="key" size={26} />}
        onChangeText={(text) => setFieldValue("repeatPassword", text)}
        value={values.repeatPassword}
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
  },
});
