import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import { Theme } from "../../Theme/Theme";

export const AboutUsScreen = () => {
  const goBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://pbs.twimg.com/profile_images/448117636287569920/i6N3fiFw_400x400.jpeg",
        }}
        style={{ width: 75, height: 75, marginTop: 100 }}
      />
      <Text style={styles.texto}>Indala "Teclado Veloz" Briggiler</Text>
      <Image
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={{ width: 75, height: 75 }}
      />
      <Text style={styles.texto}>Facundo "El Cerebro" Cartolano</Text>
      <Image
        source={{
          uri: "https://media-exp1.licdn.com/dms/image/C4E03AQHRy0cO_Rcfhg/profile-displayphoto-shrink_200_200/0/1549474672843?e=1629331200&v=beta&t=TPctDI4tDAlCiOwoiKaslSMdAGcC5iRY1oE908TyzkU",
        }}
        style={{ width: 75, height: 75 }}
      />
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
    marginTop: 20,
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
