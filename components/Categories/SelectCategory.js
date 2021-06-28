import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { ListItem, Button, Icon } from "react-native-elements";
import { categories } from "./CategoriesList";
import { Theme } from "../../Theme/Theme";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonCustom } from "../Custom/ButtonCustom";
import { TransactionHeader } from "../Transactions/TransactionHeader";
import { Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;

export const SelectCategory = ({ navigation }) => {
  const [expanded, setExpanded] = useState(true);

  const [categorySelected, setCategorySelected] = useState(categories[0]);

  const handleSubmit = (route) => {
    navigation.navigate(route);
    //Aca tiene que navegar al CreateCategory
  };

  const chooseCategory = (key) => {
    setCategorySelected(categories[key]);
    // categories[key].color = Theme.colors.primary;
  };

  const goBackWithCategory = () => {
    navigation.navigate("TransactionDetail", {
      title2: categorySelected.title,
    });
  };

  return (
    <View>
      <TransactionHeader
        navigation={navigation}
        icon="arrow-left"
        title="Categorías"
        onPressFunction={goBackWithCategory}
      />
      <View style={styles.container}>
        {/* <View style={styles.goBackContainer}>
        <ButtonCustom
          title="Volver"
          icon={<Icon name="arrow-left" size={25} color="white" />}
          onPressFunction={() => goBackWithCategory()}
          widthCustom={100}
        />
      </View> */}
        <View style={styles.textContainer}>
          {/* <Text style={{ fontSize: 25, fontWeight: "bold" }}>Categorías</Text> */}
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            Seleccionada: {categorySelected.title}
          </Text>
        </View>
        <View>
          <ListItem.Accordion
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title>
                    Seleccioná o creá una categoría
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={expanded}
            // noRotation={true}
            onPress={() => {
              setExpanded(!expanded);
            }}
            containerStyle={{ width: 300 }}
          >
            <ScrollView style={{ flex: 1, maxHeight: ScreenHeight - 300 }}>
              {categories.map((category, key) => (
                <ListItem
                  key={key}
                  onPress={() => chooseCategory(key)}
                  bottomDivider
                  containerStyle={{
                    width: 300,
                    // backgroundColor: category.color,
                  }}
                >
                  <ListItem.Content style={styles.categoryTitle}>
                    <ListItem.Title>{category.title}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </ScrollView>
          </ListItem.Accordion>
        </View>

        <Button
          title="+"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("CreateCategory")}
          titleStyle={{ fontSize: 36, fontWeight: "bold" }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: ScreenHeight,
    paddingBottom: 120,
  },
  button: {
    width: 100,
    margin: 15,
    marginTop: 40,
    height: 50,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: Theme.colors.primary,
  },
  textContainer: {
    fontSize: 50,
    marginTop: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  goBackContainer: {
    position: "absolute",
    left: 0,
    top: 70,
  },

  categoryTitle: {},
});
