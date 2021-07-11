import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import { Button, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

export const TransactionsScreen = ({ navigation }) => {
  const buttons = ["Todos", "Ingresos", "Egresos"];
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    fetchTransactions();
    fetchCategories().then((data) => {
      setCategories((prev) => {
        prev = data;
        return prev;
      });
      console.log("CAT ARR", categories);
    });
  }, []);

  const fetchTransactions = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQzYzMxY2MzZTU4ZTBmODQzYjJhYTYiLCJpYXQiOjE2MjQ0OTA4MTd9.0kKUNx_IeJ_KkORf7SgJdNFG-gjf2SiTa4TJaVK0GtA"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://morning-meadow-12976.herokuapp.com/api/transactions/60dcf2b52894d90015e29e2b",
      requestOptions
    );

    const responseJson = await response.json();

    setTransactions(responseJson);
  };

  const fetchCategories = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQzYzMxY2MzZTU4ZTBmODQzYjJhYTYiLCJpYXQiOjE2MjQ0OTA4MTd9.0kKUNx_IeJ_KkORf7SgJdNFG-gjf2SiTa4TJaVK0GtA"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://morning-meadow-12976.herokuapp.com/api/categories/60dcf2b52894d90015e29e2b",
      requestOptions
    );

    const responseJson = await response.json();

    const responseCategories = responseJson.categories;

    const responseCategoriesObj = {};

    responseCategories.forEach((category) => {
      responseCategoriesObj[category._id] = category.title;
    });

    console.log("catOBJ", responseCategoriesObj);

    return responseCategoriesObj;
  };

  const renderItem = ({ item }) => {
    let categoryId = item.category;
    let accountId = item.account;

    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <View
        key={item._id}
        // style={
        //   item.type === "ingreso"
        //     ? showIncome
        //       ? styles.itemIncomeShow
        //       : styles.itemIncomeHide
        //     : showOutcome
        //     ? styles.itemOutcomeShow
        //     : styles.itemOutcomeHide
        // }
      >
        <View>
          <Text>{item.description}</Text>
          {/* <Text>CATEGORIA: {categoriasObtenidas[categoryId]}</Text> */}
          {/*   <Text>CUENTA: {objAc.accountId}</Text> */}
        </View>
        <Text>{item.type}</Text>
        <Text>{item.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Historial</Text>

      <View>
        {/* <Button title="Todas" onPress={showAll} />
        <Button title="Ingresos" onPress={showOnlyIncome} />
        <Button title="Egresos" onPress={showOnlyOutcome} />
      </View> */}

        <View>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={transactions}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
              // extraData={selectedId}
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
