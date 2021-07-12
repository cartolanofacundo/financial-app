import React, { useState, useContext, useEffect} from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Image, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../../Theme/Theme";
import { InputCustom } from "../Custom/InputCustom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { AuthContext } from "../Context/AuthContext";
import { Alert } from "react-native";

export const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const { logIn, errorMessage, removeError } = useContext(AuthContext);


  useEffect(() => {
    if(errorMessage.length === 0){
      return
    }

    Alert.alert('Login Incorrecto', errorMessage, [{
      text: "Ok",
      onPress: removeError
    }])
    setLoading(false);
  }, [errorMessage])

  useEffect(() => {
    setLoading(false);
  }, [])
  
  const handleResponse = (email, password) => {
    logIn({ email, password })
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
      onSubmit: ({ email, password }) => {
        setLoading(true);
        handleResponse(email, password)
        logIn({ email, password })
      },
      validationSchema: loginValidationSchema,
      validateOnChange: true,
    });

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
        <Button
          title="Ingresar"
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit}
        ></Button>

        <View style={styles.registration}>
          <Text style={styles.hasNotAccount}>¿No tenés cuenta?</Text>
          <Text
            onPress={() => navigation.navigate("Registrarse")}
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
