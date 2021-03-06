import React, { useState, useEffect, useContext } from "react";
import { FlatList } from "react-native";
import { SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Moment from "moment";
import "moment/locale/es";
import { Theme } from "../../Theme/Theme";
import { UserContext } from "../Context/UserContext";

export const TransactionsScreen = ({ navigation }) => {
  const { transactions, categories, accounts } = useContext(UserContext);

  const buttons = [
    {
      key: "todas",
      title: "Todas",
    },
    {
      key: "ingreso",
      title: "Ingresos",
    },
    {
      key: "egreso",
      title: "Egresos",
    },
  ];

  // const [transactions, setTransactions] = useState([]);
  // const [categories, setCategories] = useState({});
  // const [accounts, setAccounts] = useState({});
  const [selectedDateId, setSelectedDateId] = useState("todas");
  const [showIncome, setShowIncome] = useState(true);
  const [showOutcome, setShowOutcome] = useState(true);
  const [buttonSelectedStyle, setButtonSelectedStyle] = useState(
    styles.buttonTodas
  );
  const [categoriesTransformed, setCategoriesTransformed] = useState({});
  const [accountsTransformed, setAccountsTransformed] = useState({});

  useEffect(() => {
    setCategoriesTransformed(transformCategories());
    setAccountsTransformed(transformAccounts());
  }, []);

  useEffect(() => {
    setCategoriesTransformed(transformCategories());
    setAccountsTransformed(transformAccounts());
  }, [categories, accounts]);

  const handleCancel = () => {
    navigation.popToTop();
    resetValues();
  };

  const transformCategories = () => {
    let responseCategories = {};
    categories.forEach((category) => {
      responseCategories[category._id] = category.title;
    });
    return responseCategories;
  };

  const transformAccounts = () => {
    let responseAccounts = {};
    accounts.forEach((account) => {
      responseAccounts[account._id] = account.title;
    });
    return responseAccounts;
  };

  const renderTransactions = ({ item }) => {
    let categoryId = item.category;
    let accountId = item.account;
    Moment.locale("es");

    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <View
        style={
          item.type === "ingreso"
            ? showIncome
              ? styles.itemIncomeShow
              : styles.itemIncomeHide
            : showOutcome
            ? styles.itemOutcomeShow
            : styles.itemOutcomeHide
        }
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text>{Moment(item.date).format("D MMMM")}</Text>
          </View>

          <View
            style={{
              minWidth: 100,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                minWidth: 150,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              {item.description}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                fontSize: 9,
                minWidth: 100,
              }}
            >
              <Text>{categoriesTransformed[categoryId]}</Text>
              <Text> | </Text>
              <Text>{accountsTransformed[accountId]}</Text>
            </View>
          </View>
          <View>
            <Text style={item.type == "egreso" ? styles.red : styles.green}>
              {item.type == "egreso" ? "-" : ""} ${item.amount}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const handleSelectButon = (key) => {
    setSelectedDateId(key);

    switch (key) {
      case "egreso":
        setShowIncome(false);
        setShowOutcome(true);
        setButtonSelectedStyle(styles.buttonEgresos);
        break;

      case "ingreso":
        setShowIncome(true);
        setShowOutcome(false);
        setButtonSelectedStyle(styles.buttonIngresos);
        break;

      case "todas":
        setShowIncome(true);
        setShowOutcome(true);
        setButtonSelectedStyle(styles.buttonTodas);
        break;

      default:
        setShowIncome(true);
        setShowOutcome(true);
    }
  };

  const renderButtons = ({ item }) => {
    const selectButtonStyle = (key) => {
      switch (key) {
        case "egreso":
          return styles.buttonEgreso;
          break;

        case "ingreso":
          return styles.buttonIngreso;

          break;

        case "todas":
          return styles.buttonTodas;

          break;

        default:
          return styles.buttonTodas;
      }
    };

    let estiloBtn = selectButtonStyle(item.key);

    return (
      <TouchableOpacity
        style={
          item.key === selectedDateId ? estiloBtn : styles.dateButtonsDisabled
        }
        onPress={() => handleSelectButon(item.key)}
      >
        <Text
          style={
            item.key === selectedDateId
              ? styles.dateButtonTitlePicked
              : styles.dateButtonTitleDisabled
          }
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Historial de transacciones</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.dateInput}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={buttons}
            renderItem={renderButtons}
            keyExtractor={(item) => item.key}
            extraData={selectedDateId}
          />
        </View>

        <View>
          <SafeAreaView style={styles.transactionsContainer}>
            <FlatList
              data={transactions}
              renderItem={renderTransactions}
              keyExtractor={(item) => item._id}
              extraData={(transactions, categories, accounts)}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionsContainer: {
    height: Dimensions.get("window").height * 0.75,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  infoContainer: {
    marginTop: 20,
  },

  itemIncomeHide: {
    display: "none",
  },
  itemOutcomeHide: {
    display: "none",
  },
  red: {
    color: "#f44236",
  },
  green: {
    color: "#4cb050",
  },
  header: {
    minHeight: Dimensions.get("window").height * 0.25,
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: Theme.colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  dateButtonsDisabled: {
    backgroundColor: "#f2f1f9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 65,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonIngreso: {
    backgroundColor: "#4cb050",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 65,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonEgreso: {
    backgroundColor: "#f44236",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 65,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
  },
  buttonTodas: {
    backgroundColor: Theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 65,
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
});
