import React, { useState } from "react";
import { Text, Button, ButtonGroup } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { categories } from "./CategoriesList";
import { IconList } from "./IconList";
import { Theme } from "../../Theme/Theme";
import { ScrollView } from "react-native-gesture-handler";
import { InputCustom } from "../Custom/InputCustom";
import { TransactionHeader } from "../Transactions/TransactionHeader";

export function CreateCategory({ navigation }) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState((type = "material"), (name = "super"));
  const [newCategory, setNewCategory] = useState("");
  const [newIcon, setNewIcon] = useState({ type: "font-awesome", name: "new" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const inputCategory = (value) => {
    setNewCategory(value);
  };

  let categories1 = categories;

  const handleSubmit = () => {
    if (newCategory === "" || newIcon.name === "new") {
      setErrorMessage("Debe ingresar un nombre y un icono");
    } else {
      setErrorMessage("Todo bien");
      //   EL BACK! tiene que agregar la nueva categoría
      categories1 = [...categories1, { title: newCategory, icon: newIcon }];
      navigation.goBack();
      // console.log(categories1);
    }
    console.log(errorMessage);
  };

  const categoryIcons = IconList.map((icon) => {
    return icon.name;
  });

  const handleOnchangeIcon = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
    setNewIcon(IconList[selectedIndex]);
  };

  return (
    <View>
      <TransactionHeader navigation={navigation} icon="arrow-left" title = "Nueva categoría"/>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.texto}>
            Seleccioná un emoji y luego ingresá un nombre para identificarla
          </Text>
        </View>

        <ScrollView
          // style={styles.accountContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <ButtonGroup
            buttons={categoryIcons}
            buttonStyle={{
              width: 100,
              borderColor: Theme.colors.primary,
              borderWidth: 1,
              borderRadius: 30,
              margin: 0,
              padding: 0,
            }}
            buttonContainerStyle={{ marginRight: 10 }}
            containerStyle={{
              borderColor: "transparent",
              backgroundColor: "transparent",
              margin: 0,
              padding: 0,
            }}
            innerBorderStyle={{ color: "transparent" }}
            selectedButtonStyle={{ backgroundColor: Theme.colors.primary }}
            selectedIndex={selectedIndex}
            onPress={(selectedIdx) => handleOnchangeIcon(selectedIdx)}
          />
        </ScrollView>

        <InputCustom
          placeholder="Nombre categoría"
          customStyles= {styles.input}
          onChangeText={inputCategory}
        />
        <Button
          title="Guardar"
          buttonStyle={styles.button}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    margin: 15,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: Theme.colors.primary,
  },
  container: {
    alignItems: "center",
    padding: 35,
  },
  texto: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
  },
  input: {
    margin: 25,
  }
});
