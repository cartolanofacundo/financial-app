import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions, FlatList, TextInput } from 'react-native'

const totalHeight = Dimensions.get('window').height * 0.75
const marginTop = Dimensions.get('window').height * 0.25

export const CalculatorScreen = ({navigation}) => {
    const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', 'OK']
    const [miNumero, setMiNumero] = useState(0)
    const [currentNumber, setCurrentNumber] = useState("")
    const [lastNumber, setLastNumber] = useState("")
    const handleInput = (buttonPressed) =>{
        if(buttonPressed === "*" || buttonPressed === "/" || buttonPressed === "+" || buttonPressed === "-"){
            setCurrentNumber(currentNumber + " " + buttonPressed + " ");
            return
        }
        if(buttonPressed === "DEL"){
            setCurrentNumber(currentNumber.substr(0,(currentNumber.length - 1)))
            return
        }
        if(buttonPressed === "."){
            setCurrentNumber(currentNumber + buttonPressed)
            return
        }if(buttonPressed === "OK"){
            setLastNumber(currentNumber + "=")
            calculator()
            let numeroMio = parseFloat(currentNumber)
            setMiNumero(numeroMio);
            navigation.pop()
            return
        }if(buttonPressed === "AC"){
            setLastNumber("")
            setCurrentNumber("")
            return
        }if(buttonPressed === "="){
            setLastNumber(currentNumber + "=")
            calculator()
            return
        }
        setCurrentNumber(currentNumber + buttonPressed);
    }

    const calculator = () =>{
        const splitNumbers = currentNumber.split(" ");
        const operator = splitNumbers[1]
        if(operator === "*"){
            setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString());
        }
        if(operator === "/"){
            setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString());
        }
        if(operator === "+"){
            setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString());
        }
        if(operator === "-"){
            setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString());
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{margin: 15}} onPress={() => navigation.pop()}><Text>Cancelar</Text></TouchableOpacity>
            <View style={styles.result}>
                <Text style={styles.resultText}>{currentNumber}</Text>
            </View>
            <View style={styles.buttons}>
                {buttons.map((button) => {
                    return (
                        <TouchableOpacity style={styles.button} key={button} onPress={() => handleInput(button)}>
                            <Text style={styles.textButton}>{button}</Text>
                        </TouchableOpacity>
                    )

                })}
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        maxHeight: totalHeight,
        backgroundColor: "white",
        marginTop: marginTop,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    result: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: "100%",
        maxHeight: 50,
        backgroundColor: 'white',
    },
    resultText:{
        color: "black",
        fontSize: 30,
        margin: 20,
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        minHeight: 85,
        minWidth: 85,
    },
    textButton: {
        color: "#5b5b5b",
        fontSize: 25,
    }
})
