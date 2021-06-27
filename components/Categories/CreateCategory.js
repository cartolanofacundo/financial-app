import React, { useState } from "react";
import { Text, Button, InputCustom } from "react-native-elements";
import { View } from "react-native";
import { CategoriesList } from "./CategoriesList";
import { iconList } from "./IconList";
import { Theme } from "../../Theme/Theme";

export function CreateCategory() {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState((type = "material"), (name = "super"));
  const [newCategory, setNewCategory] = useState("");
  const [newIcon, setNewIcon] = useState({ type: "font-awesome", name: "new" });

  const inputCategory = () => {
    setNewCategory();
  };

  const handleSubmit = () => {
    if (newCategory === "" || newIcon.name === "new") {
      setErrorMessage("Debe ingresar un nombre y un icono");
    } else {
      setErrorMessage("");
      setLoading(true);
      //   iconList tiene que agregarla
      CategoriesList = [...CategoriesList, {title: newCategory,icon: newIcon}];
    }
  };

  const categoryIcons = iconList.map((icon) => {
    return icon.name;
  });

  const handleOnchangeIcon = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
    setNewIcon(iconList[selectedIndex])
  };

  return (
    <View>
      <View>
        <Text>Nueva categoría</Text>
        <Text>
          Seleccioná un emoji y luego ingresá un nombre para identificarla
        </Text>
      </View>

      <ScrollView
        style={styles.accountContainer}
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
        placeholder="Nombre de la categoría"
        onChangeText={inputCategory}
      ></InputCustom>
      <Button
        title="Guardar"
        buttonStyle={styles.button}
        onPress={handleSubmit}
        loading={loading}
      ></Button>
    </View>
  );
}
