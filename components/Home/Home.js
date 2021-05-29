import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default Home =({ navigation }) => {
  const pressBtn = (route) => {
    navigation.navigate(route);
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Button onPress={() => pressBtn('Transactions')} title="Transaction"></Button>
      <Button onPress={() => pressBtn('TransactionsHistory')} title="TransactionsHistory"></Button>
    </View>
  );
}
