import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { InputCustom } from "../Custom/InputCustom";

import { ButtonCustom } from "../Custom/ButtonCustom";
import { Button, Text, ButtonGroup, ListItem } from "react-native-elements";
import { TransactionHeader } from "./TransactionHeader";
import { ScrollView } from "react-native-gesture-handler";
import { Theme } from "../../Theme/Theme";

const accounts = [
  {
    id: "60ca52399f8347849c473059",
    title: "Banco",
    icon: {
      type: "font-awesome",
      name: "bank",
    },
    balance: 20,
  },
  {
    id: "60ca52399f8347849c473058",
    title: "Billetera",
    icon: {
      type: "font-awesome",
      name: "money",
    },
    balance: 20,
  },
  {
    id: "60ca52399f8347849c453059",
    title: "Banco",
    icon: {
      type: "font-awesome",
      name: "bank",
    },
    balance: 20,
  },
  {
    id: "60ca52399f8347849c473658",
    title: "Billetera",
    icon: {
      type: "font-awesome",
      name: "money",
    },
    balance: 20,
  },
  {
    id: "60ca52399f8347849c478059",
    title: "Banco",
    icon: {
      type: "font-awesome",
      name: "bank",
    },
    balance: 20,
  },
  {
    id: "60ca52399f8347849c473068",
    title: "Billetera",
    icon: {
      type: "font-awesome",
      name: "money",
    },
    balance: 20,
  },
];

export const TransactionDetail = ({
  navigation,
  route,
  type = "ingreso",
  amount = "200",
}) => {
  let title2 = "";

  if (route.params !== undefined) {
    title2 = route.params.title2;
  } else {
    title2 = "Sin seleccionar";
  }

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");
  const [isSelectedToday, setIsSelectedToday] = useState(true);
  const [isSelectedYesterday, setIsSelectedYesterday] = useState(false);
  const [isSelectedCustom, setIsSelectedCustom] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canContinue, setCanContinue] = useState(false);

  const handleOnchangeDescription = (value) => {
    setDescription(value);
  };

  const handleOnchangeDateToday = (value) => {
    setDate(value);
    setIsSelectedToday(true);
    setIsSelectedYesterday(false);
    setIsSelectedCustom(false);
  };

  const handleOnchangeDateYesterday = (value) => {
    setDate(value);
    setIsSelectedToday(false);
    setIsSelectedYesterday(true);
    setIsSelectedCustom(false);
  };

  const handleOnchangeDateCustom = (value) => {
    setDate(value);
    setIsSelectedToday(false);
    setIsSelectedYesterday(false);
    setIsSelectedCustom(true);
  };

  const handleOnchangeAccount = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  const accountsButtons = accounts.map((account) => {
    return account.title;
  });

  return (
    <View style={{ flex: 1 }}>
      <TransactionHeader navigation={navigation} icon="arrow-left" />

      <View style={styles.containerAmount}>
        <Text style={styles.textAmount}>Valor de {type}:</Text>
        <Text style={styles.amount}>${amount}</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.title}>Categoría: {title2}</Text>
          <ButtonCustom
            containerStyle={styles.dateButton}
            type={isSelectedToday ? "solid" : "outline"}
            title="Seleccionar categoría"
            onPressFunction={() => navigation.navigate("CategoryNavigator")}
            widthCustom={250}
          />
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.title}>Detalle del ingreso</Text>
          <InputCustom
            placeholder="¿Cómo quieres indentificar tu ingreso?"
            placeholderTextColor="#b9b5b6"
            onChangeText={handleOnchangeDescription}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.title}>Fecha</Text>
          <View style={styles.dateContainer}>
            <ButtonCustom
              containerStyle={styles.dateButton}
              type={isSelectedToday ? "solid" : "outline"}
              title="Hoy"
              onPressFunction={handleOnchangeDateToday}
              widthCustom={90}
            />
            <ButtonCustom
              containerStyle={styles.dateButton}
              type={isSelectedYesterday ? "solid" : "outline"}
              title="Ayer"
              onPressFunction={handleOnchangeDateYesterday}
              widthCustom={90}
            />
            <ButtonCustom
              containerStyle={styles.dateButton}
              type={isSelectedCustom ? "solid" : "outline"}
              title="+"
              onPressFunction={handleOnchangeDateCustom}
              widthCustom={90}
            />
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.title}>Cuenta</Text>
          <ScrollView
            style={styles.accountContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <ButtonGroup
              buttons={accountsButtons}
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
              onPress={(selectedIdx) => handleOnchangeAccount(selectedIdx)}
            />
            {/* {accounts.map((account, key) => {
              account.selected = false;
              return (
                <Button
                  containerStyle={styles.dateButton}
                  title={account.title}
                  key={account.id}
                  onPress={() => handleOnchangeAccount(key)}
                  type={account.selected ? "solid" : "outline"}
                />
              );
            })} */}
          </ScrollView>
        </View>

        <View style={(styles.detailContainer, styles.btnContinue)}>
          <ButtonCustom
            title="Continuar"
            onPressFunction={() => navigation.navigate("TransactionComplete")}
            disabled={true}
            disabledStyle={{
              // borderWidth: 2,
              backgroundColor: "grey",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 40,
  },
  containerAmount: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  textAmount: {
    fontSize: 18,
  },
  amount: {
    fontSize: 50,
    fontWeight: "bold",
  },
  detailContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
  },
  dateButton: {
    marginRight: 5,
  },
  accountContainer: {
    flex: 1,
    flexDirection: "row",
    padding: -10,
  },
  btnContinue: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
