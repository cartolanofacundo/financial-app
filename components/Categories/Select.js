import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { ListItem, Button } from "react-native-elements";
import { categories } from "./CategoriesList";
import { Theme } from "../../Theme/Theme";
import { ScrollView } from "react-native-gesture-handler";

export const Select = ({ navigation }) => {
  const pressBtn = (route) => {
    navigation.navigate(route);
  };

  const [expanded, setExpanded] = useState(false);


  const handleSubmit = (route) => {
    navigation.navigate(route);
    //Aca tiene que navegar al CreateCategory
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>
          Seleccioná o creá una categoría
        </Text>
      </View>

      
      <View>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Categorias</ListItem.Title>
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
        <ScrollView style={{flex: 1, maxHeight: 200}}>
          {categories.map((category, key) => (
            <ListItem
              key={key}
              onPress={pressBtn}
              bottomDivider
              containerStyle={{ width: 300 }}
            >
              <ListItem.Content>
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
        onPress={handleSubmit}
        titleStyle={{fontSize: 36, fontWeight: "bold"}}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 100,
    margin: 15,
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
});
