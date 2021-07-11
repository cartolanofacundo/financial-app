import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { categoriesSample } from "../../../data/sampleCategories";
import { Theme } from "../../../Theme/Theme";

export const CategoriesScreen = ({ navigation }) => {
  // let handleCreateCategory = () =>{
  //     setCategories((prevCategories) => {
  //         prevCategories.pop()
  //         return [...prevCategories]
  //     })
  // }
  let initialCategories = () => {
    let categories = categoriesSample;
    if (categories[categories.length - 1]._id != "-1") {
      categories.push(newCategory);
    }
    return categories;
  };
  let handleSelectAccount = (id) => {
    setselectedId(id);
    //navigation pop
  };
  let newCategory = {
    _id: "-1",
    title: "Crear nueva categoria",
    icon: {
      type: "material-community",
      name: "plus-circle",
    },
    balance: null,
  };
  const [categories, setCategories] = useState(initialCategories);
  const totalHeight = Dimensions.get("window").height * 0.75;
  const marginTop = Dimensions.get("window").height * 0.25;
  const [selectedId, setselectedId] = useState(null);
  const renderItem = ({ item }) => {
    if (item._id === "-1") {
      return (
        <TouchableOpacity
          key={item._id}
          onPress={() => console.log("create category")}
          style={{ marginTop: 5 }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Icon
                type={item.icon.type}
                name={item.icon.name}
                size={50}
                color="#BDBDBD"
              />
              <Text style={{ marginLeft: 20 }}>{item.title}</Text>
            </View>
            <Icon
              type="material-community"
              name="chevron-right"
              color="#BDBDBD"
              size={25}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={item._id}
          onPress={() => handleSelectAccount(item._id)}
          style={{ marginTop: 5 }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Icon
                type={item.icon.type}
                name={item.icon.name}
                color="white"
                size={29}
                containerStyle={{
                  marginLeft: 3,
                  backgroundColor: Theme.colors.primary,
                  borderRadius: 50,
                  padding: 7,
                }}
              />
              <Text style={{ marginLeft: 20 }}>{item.title}</Text>
            </View>
            <Icon
              type="material-community"
              name={
                item._id === selectedId
                  ? "check-circle"
                  : "checkbox-blank-circle-outline"
              }
              color={Theme.colors.primary}
            />
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View
      style={{
        height: totalHeight,
        marginTop: marginTop,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text>Cancelar</Text>
      </TouchableOpacity>
      <View style={{ padding: 10, margin: 10 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          extraData={(selectedId, categories)}
        />
      </View>
    </View>
  );
};
