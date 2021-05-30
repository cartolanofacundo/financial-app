import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export const TransactionsHistory = ({navigation}) => {

    const pressBtn = () => {
        navigation.navigate("Transactions");
      };
    
      return (
        <View style={styles.container}>
          <Button onPress={pressBtn} title="TransactionsHistory"></Button>
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
