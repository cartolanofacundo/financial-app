import { View } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TransactionHedaer } from "./TransactionHedaer";
import { TransactionInsert } from "./TransactionInsert";
// import { Calculator } from "./Calculator";
import calculate, { initialState } from "./calculate";
import {
  ListItem,
  Avatar,
  Input,
  ButtonGroup,
  Button,
} from "react-native-elements";
import { CalendarCustom } from "./CalendarCustom";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#2ECC71",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 100,
  },
  insertContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
});

const categoriesEgresos = [
  {
    title: "Supermercado",
    icon: {
      type: "material",
      name: "super",
    },
  },
  {
    title: "Alquiler",
    icon: {
      type: "material",
      name: "alquiler",
    },
  },
  {
    title: "Expensas",
    icon: {
      type: "material",
      name: "expensas",
    },
  },
];
const categoriesIngresos = [
  {
    title: "Sueldo",
    icon: {
      type: "material",
      name: "sueldo",
    },
  },
  {
    title: "Freelance",
    icon: {
      type: "material",
      name: "free",
    },
  },
  {
    title: "Venta de sahumerios",
    icon: {
      type: "material",
      name: "venta",
    },
  },
];

const cuentas = [
  {
    title: "Banco",
    icon: {
      type: "material",
      name: "venta",
    },
    balance: 2000,
  },
  {
    title: "Billetera",
    icon: {
      type: "material",
      name: "venta",
    },
    balance: 2000,
  },
  {
    title: "Ahorros",
    icon: {
      type: "material",
      name: "venta",
    },
    balance: 2000,
  },
];

export const TransactionDetail = ({ navigation, route }) => {
  const [state, setState] = useState(initialState);

  // const title = route.params.title;
  const title = "Egresos";
  const isInDetails = true;
  const [categories, setCategories] = useState(categoriesIngresos);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);

  const togggleCategories = () => {
    if (title === "Egresos") {
      setCategories(categoriesEgresos);
    }
  };

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={styles.mainContainer}>
      <TransactionHedaer title={title} />
      <TransactionInsert
        value={parseFloat(state.currentValue).toLocaleString()}
        style={styles.insertContainer}
        isInDetails={isInDetails}
      />

      <ListItem.Accordion
        content={
          <>
            {/* <Icon name="place" size={30} /> */}
            <ListItem.Content>
              <ListItem.Title>List Accordion</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={handlePress}
      >
        {categories.map((categorie, key) => (
          <ListItem
            key={key}
            // onPress={log}
            bottomDivider
          >
            <Avatar
              title={categorie.title}
              // source={{ uri: l.avatar_url }}
            />
            <ListItem.Content>
              <ListItem.Title>{categorie.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>

      <Input placeholder="Detalle del ingreso" />

      <Button
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        onPress={() => alert("click")}
        title="Hoy"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />

      <Button
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        onPress={() => alert("click")}
        title="Ayer"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />

      <Button
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        onPress={navigation.navigate("Calendar")}
        title="+"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />

      {/* <CalendarCustom /> */}

      <ButtonGroup
        buttonStyle={{ width: 100 }}
        buttonContainerStyle={{}}
        // buttons={cuentas.map((cuenta) => {
        //   cuenta.title;
        // })}
        buttons={["Banco", "Billetera", "Ahorros"]}
      />

      <Button
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        disabledTitleStyle={{ color: "#00F" }}
        linearGradientProps={null}
        onPress={navigation.navigate("TransactionComplete")}
        title="Listo"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
    </View>
  );
};
