import { Text, View } from "react-native";
import { Button } from "react-native-elements";

import React from "react";
import { StyleSheet } from "react-native";
import { Theme } from "../../Theme/Theme";
// import Icon from "react-native-vector-icons/FontAwesome";

import { Transactions } from "./Transactions";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    width: 100,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calculatorContainer: {
    marginTop: 40,
    marginBottom: 40,
  },
  calculatorRow: {
    display: "flex",
    flexDirection: "row",
  },
});

export const Calculator = ({ onPressFunction, navigation }) => {
  const setNewValue = (number) => {
    const newValue = value + number;
    setImporte(newValue);
  };

  const continuar = () => {
    console.log("click en continuar");
    navigation.navigate("TransactionDetail");
    // navigation.navigate("TransactionDetail");
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculatorContainer}>
        <View style={styles.calculatorRow}>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="7"
            onPress={() => onPressFunction("number", 7)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="8"
            onPress={() => onPressFunction("number", 8)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="9"
            onPress={() => onPressFunction("number", 9)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="/"
            onPress={() => onPressFunction("operator", "/")}
          ></Button>
        </View>

        <View style={styles.calculatorRow}>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="4"
            onPress={() => onPressFunction("number", 4)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="5"
            onPress={() => onPressFunction("number", 5)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="6"
            onPress={() => onPressFunction("number", 6)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="x"
            onPress={() => onPressFunction("operator", "*")}
          ></Button>
        </View>

        <View style={styles.calculatorRow}>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="1"
            onPress={() => onPressFunction("number", 1)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="2"
            onPress={() => onPressFunction("number", 2)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="3"
            onPress={() => onPressFunction("number", 3)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="-"
            onPress={() => onPressFunction("operator", "-")}
          ></Button>
        </View>

        <View style={styles.calculatorRow}>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="0"
            onPress={() => onPressFunction("number", 0)}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="."
            onPress={() => onPressFunction("number", ".")}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="="
            onPress={() => onPressFunction("equal")}
          ></Button>

          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="+"
            onPress={() => onPressFunction("operator", "+")}
          ></Button>
        </View>

        <View style={styles.calculatorRow}>
          <Button
            buttonStyle={{
              width: 80,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="Clear"
            onPress={() => onPressFunction("clear")}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="+/-"
            onPress={() => onPressFunction("posneg")}
          ></Button>
          <Button
            buttonStyle={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            type="outline"
            title="%"
            onPress={() => onPressFunction("percentage")}
          ></Button>
        </View>
      </View>

      <View>
        <View style={styles.View}>
          <Button
            buttonStyle={{
              width: 100,
              height: 40,
              borderRadius: 50,
              margin: 10,
            }}
            title="Continuar"
            onPress={continuar}
          ></Button>
        </View>
      </View>
    </View>
  );
};
