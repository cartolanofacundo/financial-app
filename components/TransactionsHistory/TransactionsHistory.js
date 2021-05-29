import React from "react";
import { Button, View, StyleSheet } from "react-native";

export const TransactionsHistory = () => {
    const pressBtn = () => {
        navigation.navigate("Transactions");
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
          <Button onPress={pressBtn} title="TransactionsHistory"></Button>
        </View>
      );
}
