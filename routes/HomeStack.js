import * as React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../components/Home/HomeScreen";
import { ProfileScreen } from "../components/Profile/ProfileScreen";
import { AboutUsScreen } from "../components/AboutUs/AboutUsScreen";
import { TransactionsScreen } from "../components/Transactions/TransactionsScreen";
import { Theme } from "../Theme/Theme";
import { TouchableOpacity } from "react-native";
import { NewTransactionScreen } from "../components/NewTransaction/OverlayButtons/NewTransactionScreen";
import { UserProvider } from "../components/Context/UserContext";

const UserState = ({ children }) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  )

}
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -15,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Theme.colors.primary,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

export const HomeStack = () => {
  return (
    <UserProvider>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 0,
            elevation: 0,
            borderTopWidth: 0,
            backgroundColor: "#ffffff",
            height: 75,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  type="material"
                  name="home-filled"
                  size={30}
                  color={focused ? Theme.colors.primary : "#BDBDBD"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Theme.colors.primary : "#BDBDBD",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Dashboard{" "}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  type="material"
                  name="timeline"
                  size={30}
                  color={focused ? Theme.colors.primary : "#BDBDBD"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Theme.colors.primary : "#BDBDBD",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Analitics{" "}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AddTransaction"
          component={NewTransactionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon type="material" name="add" size={35} color="white" />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("New Transaction");
            },
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  type="material"
                  name="person"
                  size={30}
                  color={focused ? Theme.colors.primary : "#BDBDBD"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Theme.colors.primary : "#BDBDBD",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Mi perfil{" "}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  type="material"
                  name="notes"
                  size={30}
                  color={focused ? Theme.colors.primary : "#BDBDBD"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: focused ? Theme.colors.primary : "#BDBDBD",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  About Us{" "}
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </UserProvider>
  );
};
