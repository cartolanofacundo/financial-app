import React, { useState, useContext, useEffect } from "react";
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
import { TransactionContext } from "../../Context/TransactionContext";
import { UserContext } from "../../Context/UserContext";

const totalHeight = Dimensions.get("window").height * 0.75;
const marginTop = Dimensions.get("window").height * 0.25;

export const CategoriesScreen = ({ navigation }) => {
  const { categories } = useContext(UserContext)
  const { category, addCategoryId } = useContext(TransactionContext)
  const [categoriesInternas, setCategoriesInternas] = useState({})

  // const initialCategories = () => {
  //   let categoriesInternasFunction = categories;
  //   if (categoriesInternas.length > 0) {
  //     if (categoriesInternas[categoriesInternas.length - 1]._id != "-1") {
  //       categoriesInternasFunction.push(newCategory);
  //       setCategoriesInternas(categoriesInternasFunction);
  //     }
  //   } else {
  //     categoriesInternasFunction.push(newCategory);
  //     setCategoriesInternas(categoriesInternasFunction);
  //   }

  // };

  let handleSelectAccount = (id) => {
    addCategoryId(id);
    setCategoriesInternas([])
    console.log(category);
    setTimeout(() => navigation.pop(), 1500);
  };

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <>
          <TouchableOpacity
            key={"-1"}
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
                  type="material-community"
                  name="plus-circle"
                  size={50}
                  color="#BDBDBD"
                />
                <Text style={{ marginLeft: 20 }}>Crear nueva categoria</Text>
              </View>
              <Icon
                type="material-community"
                name="chevron-right"
                color="#BDBDBD"
                size={25}
              />
            </View>
          </TouchableOpacity>
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
                  item._id === category
                    ? "check-circle"
                    : "checkbox-blank-circle-outline"
                }
                color={Theme.colors.primary}
              />
            </View>
          </TouchableOpacity>
        </>
      )
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
                item._id === category
                  ? "check-circle"
                  : "checkbox-blank-circle-outline"
              }
              color={Theme.colors.primary}
            />
          </View>
        </TouchableOpacity>
      );
    }

  }

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
          extraData={(category, categories)}
        />
      </View>
    </View>
  );
};
