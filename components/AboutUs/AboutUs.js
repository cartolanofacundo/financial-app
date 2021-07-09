import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Theme } from "../../Theme/Theme";

export const AboutUs = () => {

    const goBack = () => {
        navigation.navigate("Home");
    }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Indala "Teclado Veloz" Briggiler</Text>
      <Text style={styles.texto}>Facundo "El Cerebro" Cartolano</Text>
      <Text style={styles.texto}>Max "Old Man" Zbinden</Text>

      <Button
        title="Regresar"
        buttonStyle={styles.button}
        onPress={goBack}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "grey",
    fontSize: 20,
  },
  button: {
    width: 200,
    margin: 100,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: Theme.colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
