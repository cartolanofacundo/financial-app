import React, { useState } from "react";
import { Text, Button, InputCustom } from "react-native-elements";
import { View } from "react-native";
import { CategoriesList } from "./CategoriesList";

export default function CreateCategory() {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState((type = "material"), (name = "super"));
  const [newCategory, setNewCategory] = useState("");
  const [newIcon, setNewIcon] = useState({type: "material", name: "new"})

  const inputCategory = () => {
    setNewCategory();
  };

  const handleSubmit = () => {
    if (newCategory === "" || newIcon.name === "new") {
      setErrorMessage("Debe ingresar un nombre y un icono");
    } else {
      setErrorMessage("");
      setLoading(true);
    //   CategoriesList tiene que agregarla
    }
  };

  return (
    <View>
      <View>
        <Text>Nueva categoría</Text>
        <Text>
          Seleccioná un emoji presionando el "+" y luego ingresá un nombre para
          identificarla
        </Text>
      </View>
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
