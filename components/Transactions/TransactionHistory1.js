import React, { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import { Button, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
// import { getCategories, getTransactions } from "./Getters";

export const TransactionHistory = ({ navigation }) => {
  //   const [transactions, setTransactions] = useState([]);

  //   const transactions = getTransactions();

  const [categoriasObtenidas, setCategoriasObtenidas] = useState({});

  const getCategories = async () => {
    try {
      let myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjZjJiNTI4OTRkOTAwMTVlMjllMmIiLCJpYXQiOjE2MjU5NDAzNzB9.Tn0_eZyLCJakBs-NfN_BHSXxwoSjumlBKeEz1o4Bves"
      );

      let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://morning-meadow-12976.herokuapp.com/api/categories/60dcf2b52894d90015e29e2b",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => handleResponse(result.categories))
        .catch((error) => console.log("error", error));
    } catch (e) {
      console.log(e);
    }
  };

  const handleResponse = (categories) => {
    let categoriesObject = {};
    categories.forEach((cat) => {
      categoriesObject[cat._id] = cat.title;
    });
    console.log("cart Obj", categoriesObject);
    setCategoriasObtenidas((prev) => {
      console.log("cart Obj en call", categoriesObject);

      prev = categoriesObject["60dceeec2894d90015e29e17"];
      return prev;
    });
    console.log(categoriasObtenidas, "CAT OBTENIDAS HANDLE");
  };

  //   const mostrarCategoria = async (id) => {
  //     try {
  //       //   const arrayCat = cat.categories;

  //       console.log("ARR CAT", categoriasObtenidas);

  //       categoriasObtenidas.map((cat) => {
  //         // if (cat._id === id) {
  //         //   return cat.title;
  //         console.log("CATEGORIE SOLA ", cat);
  //         // } else {
  //         //   console.log("ERROR");
  //         // }
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   let showCAT = mostrarCategoria("60dceeec2894d90015e29e18");

  const trans = [
    {
      type: "ingreso",
      category: "60dceeec2894d90015e29e18",
      description: "Sueldo de julio",
      amount: 150000,
      account: "60dceeec2894d90015e29e1a",
      date: "2021-02-30T18:25:43.511Z",
      _id: "60dcf8a72894d90015e29e31",
    },
    {
      type: "egreso",
      category: "60dceeec2894d90015e29e19",
      description: "Sueldo de julio",
      amount: 250000,
      account: "60dceeec2894d90015e29e1a",
      date: "2021-03-30T18:25:43.511Z",
      _id: "60dcf8a72894d90015e29e32",
    },
    {
      type: "ingreso",
      category: "60dceeec2894d90015e29e17",
      description: "Sueldo de julio",
      amount: 350000,
      account: "60dceeec2894d90015e29e1c",
      date: "2021-01-30T18:25:43.511Z",
      _id: "60dcf8a72894d90015e29e33",
    },
    {
      type: "egreso",
      category: "60dceeec2894d90015e29e17",
      description: "Sueldo de julio",
      amount: 450000,
      account: "60dceeec2894d90015e29e1b",
      date: "2021-06-30T18:25:43.511Z",
      _id: "60dcf8a72894d90015e29e34",
    },
  ];

  const accounts = [
    {
      "60dceeec2894d90015e29e1a": "banco",
    },
    {
      "60dceeec2894d90015e29e1b": "billetera",
    },
    {
      "60dceeec2894d90015e29e1c": "ahorros",
    },
  ];

  //   const categories = [
  //     {
  //       "60dceeec2894d90015e29e17": "servicios",
  //     },
  //     {
  //       "60dceeec2894d90015e29e19": "sueldo",
  //     },
  //     {
  //       "60dceeec2894d90015e29e18": "super",
  //     },
  //   ];

  //   const objAc = JSON.parse(accounts);
  //   const objCt = JSON.parse(categories);
  //   console.log("ACC", objAc, "CT", objCt);

  const [showIncome, setShowIncome] = useState(true);
  const [showOutcome, setShowOutcome] = useState(true);
  //   const [selectedId, setselectedId] = useState(null)

  const showOnlyIncome = () => {
    setShowIncome(true);
    setShowOutcome(false);
  };

  const showOnlyOutcome = () => {
    setShowIncome(false);
    setShowOutcome(true);
  };

  const showAll = () => {
    setShowIncome(true);
    setShowOutcome(true);
  };
  const renderItem = ({ item }) => {
    let categoryId = item.category;
    let accountId = item.account;

    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <View
        key={item._id}
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
        <View>
          <Text>{item.description}</Text>
          {/* <Text>CATEGORIA: {categoriasObtenidas[categoryId]}</Text> */}
          {/*   <Text>CUENTA: {objAc.accountId}</Text> */}
        </View>
        <Text>{item.type}</Text>
        <Text>{item.date}</Text>

        {/* <Item
                    item={item}
                    onPress={() => setSelectedId(item._id)}
            // backgroundColor={{ backgroundColor }}
            // textColor={{ color }}
                    /> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Historial</Text>

      <View>
        <Button title="Todas" onPress={showAll} />
        <Button title="Ingresos" onPress={showOnlyIncome} />
        <Button title="Egresos" onPress={showOnlyOutcome} />
      </View>

      <View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={trans}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            // extraData={selectedId}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  itemContainer: {
    //   display:
  },
  itemIncomeShow: {},
  itemIncomeHide: {
    display: "none",
  },
  itemOutcomeShow: {},
  itemOutcomeHide: {
    display: "none",
  },
});
