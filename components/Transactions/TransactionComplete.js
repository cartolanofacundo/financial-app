import React from "react";
import { View, Text } from "react-native";
import { TransactionHeader } from "./TransactionHeader";

export const TransactionComplete = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <TransactionHeader navigation={navigation} icon="arrow-left" />

      <View>
        <Text></Text>
      </View>
      <View style={styles.container}>
        <Text>COMPLETO</Text>
      </View>
    </View>
  );
};
