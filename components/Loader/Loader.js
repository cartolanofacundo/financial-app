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
import { ActivityIndicator } from "react-native";

export const Loader = ({ navigation }) => {
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
        <View
          style={{
            minHeight: Dimensions.get("window").height * 0.6,
            paddingTop: 150,
          }}
        >
          <ActivityIndicator size={70} color={Theme.colors.primary} />
          <View style={styles.welcomeTextContainer}>
            <Text h4>Cargando...</Text>
          </View>
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
