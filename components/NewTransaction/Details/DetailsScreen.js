import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Dimensions, FlatList, TextInput } from 'react-native'
import { Icon, Divider, Button } from "react-native-elements"
import DateTimePicker from '@react-native-community/datetimepicker';
import { TransactionContext } from "../../Context/TransactionContext";
import { UserContext } from "../../Context/UserContext";
import moment from "moment";

const dateButtonsInitial = [
    {
        key: "today",
        title: "Hoy"
    },
    {
        key: "yesterday",
        title: "Ayer"
    },
    {
        key: "other",
        title: "Otro"
    }
]


export const DetailsScreen = ({ navigation }) => {
    const { type, amount, category, account, addDescription, addDate, submitTransaction, date, description } = useContext(TransactionContext)
    const { categories, accounts, addTransaction } = useContext(UserContext)


    let styles = (type == "ingreso") ? IncomeStyles : OutcomeStyles


    const [dateButtons, setDateButtons] = useState([...dateButtonsInitial])
    const [selectedDateId, setSelectedDateId] = useState("today")
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [dateInterno, setDateInterno] = useState(new Date())
    const [descriptionInterno, setDescriptionInterno] = useState("")


    const handleInputText = (text) =>{
        setDescriptionInterno(text);
        addDescription(text);
    }

    const handleSubmit = () =>{
        if(selectedDateId === "today"){
            addDate(new Date());
        }else if(selectedDateId === "yesterday"){
            let yesterday = new Date();
            yesterday = moment().subtract(1, "days")
            addDate(yesterday)
        }else{
            addDate(dateInterno)
        }
        if(descriptionInterno != "" && category && account){
            addDescription(descriptionInterno)
            console.log(type, amount, category._id, account._id, date, description, type)
            addTransaction({type, amount, category, account, date, description, type})
            navigation.pop();
        }else{
            return
        }

    }

    const handleCancel = () => {
        navigation.popToTop()
    }

    const handleSetDateButtons = (dateF = null) => {
        if (dateF == null) {
            setDateButtons([...dateButtonsInitial])
        } else {
            setDateButtons((prev) => {
                for (let index = prev.length; index >= 0; index--) {
                    prev.pop()
                }
                prev.push({
                    title: `${dateF.getDate()}/${dateF.getMonth() + 1}/${dateF.getFullYear()}`,
                    key: `${dateF.getDate()}/${dateF.getMonth() + 1}/${dateF.getFullYear()}`,
                })
                return prev
            })
        }

    }

    const handleOnChangeDatePicker = (event, selectedDate) => {
        const currentDate = selectedDate || dateInterno;
        if (currentDate != dateInterno) {
            handleSetDateButtons(currentDate)
        }
        setShowDatePicker(!showDatePicker);
        setDateInterno(currentDate);
        addDate(currentDate);
    }

    const handleClickOtherDate = () => {
        setShowDatePicker(true);
    }

    const handleSelectDate = (id) => {
        setSelectedDateId(id);
    }

    const renderDateItem = ({ item }) => {
        if (item.key != "today" && item.key != "yesterday" && item.key != "other") {
            return (
                <TouchableOpacity key={item._id} onPress={handleClickOtherDate} style={{ marginTop: 5 }}>
                    <View style={{ flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ marginLeft: 10 }}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        } else if (item.key != "other") {
            return (
                <TouchableOpacity style={((item.key === selectedDateId) ? styles.dateButtonsPicked : styles.dateButtonsDisabled)} onPress={() => handleSelectDate(item.key)}>
                    <Text style={((item.key === selectedDateId) ? styles.dateButtonTitlePicked : styles.dateButtonTitleDisabled)}>{item.title}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={((item.key === selectedDateId) ? styles.dateButtonsPicked : styles.dateButtonsDisabled)} onPress={handleClickOtherDate}>
                    <Text style={((item.key === selectedDateId) ? styles.dateButtonTitlePicked : styles.dateButtonTitleDisabled)}>{item.title}</Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <TouchableOpacity onPress={handleCancel}>
                        <Text style={{ color: "white", fontSize: 16 }}>Cancelar</Text>
                    </TouchableOpacity>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountTitle}>Valor de los ingresos</Text>
                    <Text onPress={() => navigation.push("Calculator")} style={styles.amount}>$ {amount.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.transactionDetail}>
                <View style={styles.dateInput}>
                    <Icon type="material-community" name="calendar-check-outline" size={30} color="#707070" />
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={dateButtons}
                        renderItem={renderDateItem}
                        keyExtractor={(item) => item.key}
                        extraData={selectedDateId, dateButtons}
                    />
                </View>
                <Divider
                    style={{ width: "100%", marginTop: 25, marginBottom: 15 }}
                    color="#BDBDBD"
                    subHeaderStyle={{}}
                    width={1}
                    orientation="horizontal"
                />

                <TouchableOpacity style={styles.accountInputContainer} onPress={() => navigation.push("Accounts")}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon type="material-community" name="account-cash-outline" size={30} color="#707070" />
                        {(account) ?
                            <View style={styles.categoryContainer}>
                                <Icon type="material-community" name={account.icon.name} size={20} color={(type === "egreso") ? "#c0372f" : "#3e8d3e"} />
                                <Text style={{ fontSize: 14, marginLeft: 10, color: (type === "egreso") ? "#c0372f" : "#3e8d3e" }}>{account.title.substr(0, 10)}...</Text>
                            </View> : <Text style={styles.accountText}> Seleccionar Cuenta</Text>}

                    </View>
                    <View>
                        <Icon type="material-community" name="chevron-right" size={30} color="#8c8b91" />
                    </View>
                </TouchableOpacity>
                <Divider
                    style={{ width: "100%", marginTop: 25, marginBottom: 15 }}
                    color="#BDBDBD"
                    subHeaderStyle={{}}
                    width={1}
                    orientation="horizontal"
                />
                <View style={styles.descriptionInput}>
                    <Icon type="material-community" name="pencil-outline" size={30} color="#707070" />
                    <TextInput onChangeText={() => console.log()}
                        value={descriptionInterno}
                        onChangeText={(text) => handleInputText(text)}
                        placeholder="Descripcion"
                        style={styles.descriptionInputItem}
                    >
                    </TextInput>
                </View>
                <Divider
                    style={{ width: "100%", marginTop: 25, marginBottom: 15 }}
                    color="#BDBDBD"
                    subHeaderStyle={{}}
                    width={1}
                    orientation="horizontal"
                />
                <TouchableOpacity style={styles.categoryInputContainer} onPress={() => navigation.push("Categories")}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon type="material-community" name="tag-outline" size={30} color="#707070" />
                        {(category) ?
                            <View style={styles.categoryContainer}>
                                <Icon type="material-community" name={category.icon.name} size={20} color={(type === "egreso") ? "#c0372f" : "#3e8d3e"} />
                                <Text style={{ fontSize: 14, marginLeft: 10, color: (type === "egreso") ? "#c0372f" : "#3e8d3e" }}>{category.title.substr(0, 10)}...</Text>
                            </View> : <Text style={styles.categoryText}> Seleccionar Categoria</Text>}
                    </View>
                    <View>
                        <Icon type="material-community" name="chevron-right" size={30} color="#8c8b91" />
                    </View>
                </TouchableOpacity>
                <Divider
                    style={{ width: "100%", marginTop: 25, marginBottom: 15 }}
                    color="#BDBDBD"
                    subHeaderStyle={{}}
                    width={1}
                    orientation="horizontal"
                />
                <Button buttonStyle={styles.saveButtonStyle} title="Guardar" containerStyle={styles.saveButtonContainerStyle} onPress={handleSubmit} />
            </View>
            <View>
                {showDatePicker && (
                    <DateTimePicker
                        locale="es-ES"
                        testID="dateTimePicker"
                        value={dateInterno}
                        mode={'date'}
                        display="default"
                        onChange={handleOnChangeDatePicker}
                    />
                )}
            </View>
        </View>
    )
}

const IncomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4cb050",
    },
    header: {
        minHeight: Dimensions.get('window').height * 0.25,
        paddingTop: 30,
        paddingHorizontal: 15
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    nameContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        marginLeft: 80
    },
    name: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    amountContainer: {
        marginTop: 20,
    },
    amountTitle: {
        fontSize: 14,
        color: "white"
    },
    amount: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2,
        marginTop: 5,
    },
    transactionDetail: {
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        minHeight: Dimensions.get('window').height * 0.75,
        paddingHorizontal: 20,
    },
    dateInput: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center"

    },
    dateButtonsDisabled: {
        backgroundColor: "#f2f1f9",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 2,
        width: 50,
        height: 30,
        borderRadius: 20,
        marginLeft: 10
    },
    dateButtonsPicked: {
        backgroundColor: "#3e8d3e",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 2,
        width: 50,
        height: 30,
        borderRadius: 20,
        marginLeft: 10
    },
    dateButtonTitleDisabled: {
        color: "#8c8b91",
        fontSize: 12,
    },
    dateButtonTitlePicked: {
        color: "white",
        fontSize: 12,
    },
    descriptionInput: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center"
    },
    descriptionInputItem: {
        fontSize: 14,
        marginLeft: 10,
        overflow: "hidden",
        color: "#3e8d3e"
    },
    accountInputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    accountText: {
        marginLeft: 10,
        fontSize: 14,
        color: "#8c8b91"
    },
    categoryInputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    categoryText: {
        marginLeft: 10,
        fontSize: 14,
        color: "#8c8b91"
    },
    saveButtonStyle: {
        width: 300,
        borderRadius: 30,
        backgroundColor: "#3e8d3e"
    },
    saveButtonContainerStyle: {
        width: 300,
        borderRadius: 30,
        alignSelf: "center",
        marginTop: 70
    },
    categoryContainer: {
        minWidth: 100,
        borderRadius: 30,
        borderColor: "#3e8d3e",
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

});

const OutcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f44236",
    },
    header: {
        minHeight: Dimensions.get('window').height * 0.25,
        paddingTop: 30,
        paddingHorizontal: 15
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    nameContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "rgba(0,0,0,0.2)",
        marginLeft: 80
    },
    name: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    amountContainer: {
        marginTop: 20,
    },
    amountTitle: {
        fontSize: 14,
        color: "white"
    },
    amount: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2,
        marginTop: 5,
    },
    transactionDetail: {
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        minHeight: Dimensions.get('window').height * 0.75,
        paddingHorizontal: 20,
    },
    dateInput: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center"

    },
    dateButtonsDisabled: {
        backgroundColor: "#f2f1f9",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 2,
        width: 50,
        height: 30,
        borderRadius: 20,
        marginLeft: 10
    },
    dateButtonsPicked: {
        backgroundColor: "#c0372f",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 2,
        width: 50,
        height: 30,
        borderRadius: 20,
        marginLeft: 10
    },
    dateButtonTitleDisabled: {
        color: "#8c8b91",
        fontSize: 12,
    },
    dateButtonTitlePicked: {
        color: "white",
        fontSize: 12,
    },
    descriptionInput: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: "center"
    },
    descriptionInputItem: {
        fontSize: 14,
        marginLeft: 10,
        overflow: "hidden",
        color: "#c0372f"
    },
    accountInputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    accountText: {
        marginLeft: 10,
        fontSize: 14,
        color: "#8c8b91"
    },
    categoryInputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },
    categoryText: {
        marginLeft: 10,
        fontSize: 14,
        color: "#8c8b91"
    },
    saveButtonStyle: {
        width: 300,
        borderRadius: 30,
        backgroundColor: "#c0372f"
    },
    saveButtonContainerStyle: {
        width: 300,
        borderRadius: 30,
        alignSelf: "center",
        marginTop: 70
    },
    categoryContainer: {
        minWidth: 100,
        borderRadius: 30,
        borderColor: "#3e8d3e",
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});
