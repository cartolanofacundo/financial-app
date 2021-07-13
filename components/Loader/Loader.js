import React from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Image, Text } from "react-native-elements";
import { Theme } from "../../Theme/Theme";
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
