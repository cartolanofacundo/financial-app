import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { InputCustom } from "../Custom/InputCustom";

import { ButtonCustom } from "../Custom/ButtonCustom";
import {
  Button,
  Text,
  ButtonGroup,
  ListItem,
  Overlay,
} from "react-native-elements";
import { TransactionHeader } from "./TransactionHeader";
import { ScrollView } from "react-native-gesture-handler";
import { Theme } from "../../Theme/Theme";
import CalendarPicker from "react-native-calendar-picker";

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
  let title2 = "Sin seleccionar";

  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [account, setAccount] = useState("");
  const [isSelectedToday, setIsSelectedToday] = useState(true);
  const [isSelectedYesterday, setIsSelectedYesterday] = useState(false);
  const [isSelectedCustom, setIsSelectedCustom] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateCustomTitle, setDateCustomTitle] = useState("Fecha");
  const [startDate, setStartDate] = useState("");

  if (route.params !== undefined) {
    title2 = route.params?.title2;
  }
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    // setDateCustomTitle();
  };

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

  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const toggleDateModal = () => {
    if (selectedStartDate !== null) {
      // setStartDate(selectedStartDate.toString());

      setStartDate(selectedStartDate.toString());
    }
    setShowCalendar(false);
    setDateCustomTitle(startDate);
    console.log("TOGGLE MODAL", startDate);
  };

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
            // inputContainerStyle={styles.detailText}
            customStyles={{ width: 300, marginLeft: -10 }}
            placeholder="Ingresar detalle"
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
              title={dateCustomTitle}
              onPressFunction={toggleCalendar}
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

        <Overlay isVisible={showCalendar} toggleCalendar={toggleCalendar}>
          <View style={styles.calendarContainer}>
            <CalendarPicker onDateChange={onDateChange} />

            <Text>SELECTED DATE:{startDate}</Text>

            <ButtonCustom
              title="Seleccionar"
              onPressFunction={toggleDateModal}
            />
          </View>
          {/* <Calendar style={styles.calendarContainer} /> */}
        </Overlay>
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
    backgroundColor: Theme.colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  textAmount: {
    fontSize: 18,
    color: "white",
  },
  amount: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  detailContainer: {
    height: 90,
  },
  title: {
    fontSize: 15,
    // marginBottom: 5,
  },
  dateContainer: {
    // flex: 1,
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
  calendarContainer: {
    width: 200,
  },
});
