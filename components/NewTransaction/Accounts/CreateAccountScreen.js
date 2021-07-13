import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import { Icon, Divider, Button } from "react-native-elements";
import { TransactionContext } from "../../Context/TransactionContext";
import { icons } from "../../../data/Icons";
import { Theme } from "../../../Theme/Theme";
import { UserContext } from "../../Context/UserContext";
import { Input } from "react-native-elements/dist/input/Input";

const totalHeight = Dimensions.get("window").height * 0.75;
const marginTop = Dimensions.get("window").height * 0.25;

export const CreateAccountScreen = ({ navigation }) => {
  const { addAccount, accounts } = useContext(UserContext);

  const { type } = useContext(TransactionContext);
  const styles = type === "ingreso" ? IncomeStyles : OutcomeStyles;
  const [selectedIcon, setSelectedIcon] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log(accounts, "accounts");
  }, [accounts]);

  const [title, setTitle] = useState("");
  const handleCancel = () => {
    navigation.pop();
    resetValues();
  };

  const resetValues = () => {
    setSelectedIcon("");
    setTitle("");
  };

  const handleSelectIcon = (id) => {
    console.log("ID", id);
    setSelectedIcon(id);
  };

  const handleSubmit = () => {
    if (title != "" && selectedIcon != "") {
      addAccount({
        title: title,
        balance: balance,
        icon: {
          name: selectedIcon,
          type: "material-community",
        },
      });

      resetValues();
      navigation.pop();
    }
  };

  const renderIconsItem = ({ item }) => {
    let iconColor = selectedIcon == item ? Theme.colors.primary : "#707070";
    return (
      <Icon
        type="material-community"
        name={item}
        size={20}
        color="white"
        containerStyle={{
          margin: 5,
          backgroundColor: iconColor,
          borderRadius: 20,
          padding: 10,
        }}
        onPress={() => handleSelectIcon(item)}
      />
    );
  };

  return (
    <View style={styles.transactionDetail}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleCancel}>
          <Text style={{ color: "black", fontSize: 16 }}>Cancelar</Text>
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Crear categoria</Text>
        </View>
      </View>

      <View>
        <Text>Nombre</Text>
      </View>
      <View style={styles.descriptionInput}>
        <Icon
          type="material-community"
          name="pencil-outline"
          size={30}
          color="#707070"
        />
        <TextInput
          onChangeText={() => console.log()}
          value={title}
          onChangeText={setTitle}
          placeholder="Ingresa el nombre"
          style={styles.descriptionInputItem}
        ></TextInput>
      </View>

      <View>
        <Text>Monto inicial</Text>
      </View>
      <View style={styles.descriptionInput}>
        <Icon
          type="material-community"
          name="pencil-outline"
          size={30}
          color="#707070"
        />
        <Input
          onChangeText={() => console.log()}
          value={balance}
          keyboardType="numeric"
          onChangeText={setBalance}
          placeholder="Ingresa el monto inicial"
          style={styles.descriptionInputItem}
        ></Input>
      </View>

      <View style={styles.dateInput}>
        <Text style={{ marginBottom: 10 }}> Selecciona el icono</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={icons}
          renderItem={renderIconsItem}
          keyExtractor={(item) => item}
          extraData={selectedIcon}
        />
      </View>
      <Divider
        style={{ width: "100%", marginTop: 25, marginBottom: 15 }}
        color="#BDBDBD"
        subHeaderStyle={{}}
        width={1}
        orientation="horizontal"
      />

      <Divider
        style={{ width: "100%", marginTop: 25, marginBottom: 15 }}
        color="#BDBDBD"
        subHeaderStyle={{}}
        width={1}
        orientation="horizontal"
      />

      <Button
        buttonStyle={styles.saveButtonStyle}
        title="Crear"
        containerStyle={styles.saveButtonContainerStyle}
        onPress={handleSubmit}
      />
    </View>
  );
};

const IncomeStyles = StyleSheet.create({
  container: {
    backgroundColor: "#4cb050",
    marginTop: marginTop,
    height: totalHeight,
  },
  header: {
    minHeight: Dimensions.get("window").height * 0.25,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
  nameContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginLeft: 50,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    marginTop: 20,
  },
  amountTitle: {
    fontSize: 14,
    color: "white",
  },
  amount: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 5,
  },
  transactionDetail: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: totalHeight,
    marginTop: marginTop,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dateInput: {
    flexDirection: "column",
    marginTop: 40,
  },
  dateButtonsDisabled: {
    backgroundColor: "#f2f1f9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 50,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  dateButtonsPicked: {
    backgroundColor: "#3e8d3e",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 50,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  dateButtonTitleDisabled: {
    color: "#8c8b91",
    fontSize: 12,
  },
  dateButtonTitlePicked: {
    color: "white",
    fontSize: 12,
  },
  descriptionInput: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  descriptionInputItem: {
    fontSize: 14,
    marginLeft: 10,
    overflow: "hidden",
  },
  accountInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  accountText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#8c8b91",
  },
  categoryInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#8c8b91",
  },
  saveButtonStyle: {
    width: 300,
    borderRadius: 30,
    backgroundColor: Theme.colors.primary,
  },
  saveButtonContainerStyle: {
    width: 300,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 70,
  },
});

const OutcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f44236",
  },
  header: {
    minHeight: Dimensions.get("window").height * 0.25,
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 50,
  },
  nameContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginLeft: 50,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    marginTop: 20,
  },
  amountTitle: {
    fontSize: 14,
    color: "white",
  },
  amount: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 5,
  },
  transactionDetail: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: totalHeight,
    marginTop: marginTop,
    paddingHorizontal: 20,
  },
  dateInput: {
    flexDirection: "column",
    marginTop: 40,
  },
  dateButtonsDisabled: {
    backgroundColor: "#f2f1f9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 50,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  dateButtonsPicked: {
    backgroundColor: "#c0372f",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 50,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  dateButtonTitleDisabled: {
    color: "#8c8b91",
    fontSize: 12,
  },
  dateButtonTitlePicked: {
    color: "white",
    fontSize: 12,
  },
  descriptionInput: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  descriptionInputItem: {
    fontSize: 14,
    marginLeft: 10,
    overflow: "hidden",
  },
  accountInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  accountText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#8c8b91",
  },
  categoryInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#8c8b91",
  },
  saveButtonStyle: {
    width: 300,
    borderRadius: 30,
    backgroundColor: Theme.colors.primary,
  },
  saveButtonContainerStyle: {
    width: 300,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 70,
  },
});
