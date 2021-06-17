import React, { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
// import { SpeedDial } from "react-native-elements/dist/buttons/SpeedDial";
import { Transactions } from "../Transactions/Transactions";

export const Home = ({ navigation }) => {
  const pressBtn = (route) => {
    navigation.navigate(route);
  };

  // const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* <Button
        onPress={() => pressBtn("SelectType")}
        title="SelectType"
      ></Button> */}
      {/* <Button
        onPress={() => pressBtn("Transactions")}
        title="Transactions"
      ></Button> */}
      <Button
        onPress={() =>
          navigation.navigate("Transactions", { title: "Egresos" })
        }
        title="Egresos"
      ></Button>
      <Button
        onPress={() =>
          navigation.navigate("Transactions", { title: "Ingresos" })
        }
        title="Ingresos"
      ></Button>
      <Button
        onPress={() =>
          navigation.navigate("TransactionsDetail", { title: "Ingresos" })
        }
        title="detail"
      ></Button>
      <Button
        onPress={() => pressBtn("TransactionsHistory")}
        title="TransactionsHistory"
      ></Button>
      {/* <SpeedDial
        open={open}
        // icon={{ name: "edit", color: "#fff" }}
        openIcon={{ name: "close", color: "#fff" }}
        onChange={() => setOpen(!open)}
      >
        <SpeedDial.Action
          // icon={{ name: "add", color: "#fff" }}
          title="Ingresos"
          // onPress={() => console.log("Add Something")}
          onPress={() =>
            navigation.navigate("SelectType", { title: "Ingresos" })
          }
        />
        <SpeedDial.Action
          // icon={{ name: "delete", color: "#fff" }}
          title="Egresos"
          // onPress={() => console.log("Delete Something")}
          onPress={() =>
            navigation.navigate("SelectType", { title: "Egresos" })
          }
        />
      </SpeedDial> */}
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
});
