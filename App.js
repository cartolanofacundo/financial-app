import React, { useEffect, useState } from "react";
import { AuthContext } from "./components/Context/AuthContext";
import { RootStack } from "./routes/RootStack";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [logedIn, setLogedIn] = useState(false);
  const [loadingApp, setLoadingApp] = useState(false);
  const [categories, setCategories] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [balance, setBalance] = useState(null);

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem('user')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
  const storeToken = async (token) => {
    try {
      const jsonValue = JSON.stringify(token)
      await AsyncStorage.setItem('token', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  const storeUser = async (user) => {
    try {
      const jsonValue = JSON.stringify(user)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  // 

  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }

  const getInitialData = async () => {
      let tokenScope = await getToken();
      if(tokenScope !=  null){
        setLogedIn(true);
        let userScope = await getUser();
        setUser(userScope);
        setToken(tokenScope);

        setLoadingApp(false);
      }else{
        setLogedIn(false);
        setLoadingApp(false);
      }
  };

  useEffect(() => {
    setLoadingApp(true);
    getInitialData();
  },[])

  return (
    <AuthContext.Provider value={{token, setToken, user, setUser, storeToken, removeToken, getToken}}>
      <RootStack />
    </AuthContext.Provider>
  );
}

// const saveToken = async (token) => {
//   //   try {
//   //     const jsonValue = JSON.stringify(token);
//   //     await AsyncStorage.setItem("token", jsonValue);
//   //   } catch (e) {
//   //     // saving error
//   //   }
//   // };