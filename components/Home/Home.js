import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export const Home = ({ navigation }) => {
  const pressBtn = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => pressBtn('Transactions')} title="Transactions"></Button>
      <Button onPress={() => pressBtn('TransactionsHistory')} title="TransactionsHistory"></Button>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
