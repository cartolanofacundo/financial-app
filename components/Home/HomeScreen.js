import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Icon } from "react-native-elements";
import { Theme } from "../../Theme/Theme"
import { ScrollView } from "react-native";

export const HomeScreen = ({ navigation }) => {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    let mesActual = new Date().getMonth();
    let anioActual = new Date().getFullYear();
    const totalHeight = Dimensions.get('window').height
    const categoriesHeight = (Dimensions.get('screen').height < 800) ? 220 : 280
    console.log("alto scroll", categoriesHeight)
    console.log("alto display", Dimensions.get('screen').height)
    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Balance</Text>
                </View>
                <View style={styles.balanceContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>Disponible</Text>
                        <Text style={{ color: "white", fontSize: 16 }}> hoy</Text>
                    </View>
                    <View style={{ marginBottom: 40 }}>
                        <Text style={{ fontSize: 30, marginTop: 20, color: "white", fontWeight: "bold" }}>$ 25800</Text>
                        <Text style={{ color: "white" }}>En el total de las cuentas</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{ marginTop: -30, paddingHorizontal: 20, maxHeight: 130 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.cardContainer}></View>
                <View style={styles.cardContainer}></View>
                <View style={styles.cardContainer}></View>
                <View style={styles.cardContainer}></View>
            </ScrollView>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }} >
                <View style={{ flexDirection: "row", marginBottom: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gastos de </Text>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: Theme.colors.primary }}>Junio</Text>
                </View>
                <ScrollView style={{ paddingHorizontal: 5, maxHeight: categoriesHeight }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="material" name="person" size={40} color="white" containerStyle={{ backgroundColor: "rgb(232,76,136)", borderRadius: 50, padding: 5 }} />
                            <View style={{ flexDirection: "column", marginLeft: 10, padding: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Deportes</Text>
                                <Text style={{ color: "rgba(0,0,0,0.5)", marginTop: 2 }}>Total gastado en junio</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 18 }}>$200</Text>
                    </View>


                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="material" name="person" size={40} color="white" containerStyle={{ backgroundColor: "rgb(232,76,136)", borderRadius: 50, padding: 5 }} />
                            <View style={{ flexDirection: "column", marginLeft: 10, padding: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Deportes</Text>
                                <Text style={{ color: "rgba(0,0,0,0.5)", marginTop: 2 }}>Total gastado en junio</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 18 }}>$200</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="material" name="person" size={40} color="white" containerStyle={{ backgroundColor: "rgb(232,76,136)", borderRadius: 50, padding: 5 }} />
                            <View style={{ flexDirection: "column", marginLeft: 10, padding: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Deportes</Text>
                                <Text style={{ color: "rgba(0,0,0,0.5)", marginTop: 2 }}>Total gastado en junio</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 18 }}>$200</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="material" name="person" size={40} color="white" containerStyle={{ backgroundColor: "rgb(232,76,136)", borderRadius: 50, padding: 5 }} />
                            <View style={{ flexDirection: "column", marginLeft: 10, padding: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Deportes</Text>
                                <Text style={{ color: "rgba(0,0,0,0.5)", marginTop: 2 }}>Total gastado en junio</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 18 }}>$200</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="material" name="person" size={40} color="white" containerStyle={{ backgroundColor: "rgb(232,76,136)", borderRadius: 50, padding: 5 }} />
                            <View style={{ flexDirection: "column", marginLeft: 10, padding: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Deportes</Text>
                                <Text style={{ color: "rgba(0,0,0,0.5)", marginTop: 2 }}>Total gastado en junio</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 18 }}>$200</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="material" name="person" size={40} color="white" containerStyle={{ backgroundColor: "rgb(232,76,136)", borderRadius: 50, padding: 5 }} />
                            <View style={{ flexDirection: "column", marginLeft: 10, padding: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Deportes</Text>
                                <Text style={{ color: "rgba(0,0,0,0.5)", marginTop: 2 }}>Total gastado en junio</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 18 }}>$200</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: "white",
        minHeight: Dimensions.get('window').height
    },
    headerContainer: {
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: Theme.colors.primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    header: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get('window').width,
    },
    balanceContainer: {

    },
    headerText: {
        flex: 1,
        color: "white",
        fontSize: 20,
        marginBottom: 5,
        paddingTop: 10
    },
    cardContainer: {
        height: 100,
        width: 200,
        borderRadius: 30,
        margin: 5,
        backgroundColor: "rgb(255,255,255)",
        elevation: 5,
    }
});

