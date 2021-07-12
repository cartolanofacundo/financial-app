import React, { useContext, useState, useEffect} from "react";
import { View, StyleSheet, Alert} from "react-native";
import { Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";
import { InputCustom } from "../Custom/InputCustom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Success } from "./Success"
import { AuthContext } from "../Context/AuthContext";

export const CreateAccountScreen = ({ navigation }) => {
  const {registrarse, successMessage, errorMessageSignUp, removeErrorSignUp} = useContext(AuthContext)
  const [loading, setLoading] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if(successMessage.length === 0){
      return
    }
    setShowSuccess(true)
  }, [successMessage])

  useEffect(() => {
    if(errorMessageSignUp.length === 0){
      return
    }

    Alert.alert('Registro Incorrecto', errorMessageSignUp, [{
      text: "Ok",
      onPress: removeErrorSignUp
    }])
    setLoading(false);
  }, [errorMessageSignUp])

  const toggleModal = () => {
    setShowSuccess(!showSuccess)
  } 

  const navigateTo = (ruta) => {
    navigation.navigate(ruta);
  };

  const registerValidationSchema = Yup.object().shape({
    first: Yup.string().required("El nombre es requerido"),
    last: Yup.string().required("El apellido es requerido"),
    email: Yup.string()
      .email("El email no es válido")
      .required("El mail es requerido"),
    password: Yup.string()
      .required("ingrese una contraseña")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "La contraseña debe tener 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
      ),
    repeat_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Las contraseñas deben coincidir"
    ),
  });

  const { values, isSubmiting, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        first: "",
        last: "",
        email: "",
        password: "",
        repeat_password: "",
      },
      onSubmit: ({first, last, email, password, repeat_password}) => {
        registrarse({first, last, email, password, repeat_password})
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
        type="first"
        name="first"
        placeholder="Nombre"
        renderErrorMessage={errors.first}
        leftIcon={<Icon name="account" size={26} />}
        onChangeText={(text) => setFieldValue("first", text)}
        value={values.first}
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
        secureTextEntry={true}
        renderErrorMessage={errors.password}
        leftIcon={<Icon name="key" size={26} />}
        leftIconContainerStyle={styles.leftIcon}
        onChangeText={(text) => setFieldValue("password", text)}
        value={values.password}
      ></InputCustom>
      <InputCustom
        type="repeat_password"
        name="repeat_password"
        placeholder="Repetir contraseña"
        secureTextEntry={true}
        renderErrorMessage={errors.repeat_password}
        leftIcon={<Icon name="key" size={26} />}
        onChangeText={(text) => setFieldValue("repeat_password", text)}
        value={values.repeat_password}
      ></InputCustom>

      <Button
        title="Crear cuenta"
        buttonStyle={styles.button}
        onPress={handleSubmit}
        loading={loading}
      ></Button>

      <Success show= {showSuccess} navigation={navigation} setShow={toggleModal}></Success>

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
