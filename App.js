import React from "react";
import { AuthProvider } from "./components/Context/AuthContext";
import { RootStack } from "./routes/RootStack";

const AppState = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )

}


export default function App() {
  return (
    <AppState>
      <RootStack />
    </AppState>
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
// const [token, setToken] = useState(null);
// const [logedIn, setLogedIn] = useState(false);
// const [loadingApp, setLoadingApp] = useState(false);
// const [categories, setCategories] = useState(null);
// const [transactions, setTransactions] = useState(null);
// const [accounts, setAccounts] = useState(null);
// const [balance, setBalance] = useState(null);

// const removeToken = async () => {
//   try {
//     await AsyncStorage.removeItem('token')
//   } catch(e) {
//     // remove error
//   }

//   console.log('Done.')
// }
// const removeUser = async () => {
//   try {
//     await AsyncStorage.removeItem('user')
//   } catch(e) {
//     // remove error
//   }

//   console.log('Done.')
// }
// const storeToken = async (token) => {
//   try {
//     const jsonValue = JSON.stringify(token)
//     await AsyncStorage.setItem('token', jsonValue)
//   } catch (e) {
//     // saving error
//   }
// }
// const storeUser = async (user) => {
//   try {
//     const jsonValue = JSON.stringify(user)
//     await AsyncStorage.setItem('user', jsonValue)
//   } catch (e) {
//     // saving error
//   }
// }
// // 

// const getToken = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem('token')
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch(e) {
//     // error reading value
//   }
// }
// const getUser = async () => {

// }

// const getInitialData = async () => {
//     let tokenScope = await getToken();
//     if(tokenScope !=  null){
//       setLogedIn(true);
//       let userScope = await getUser();
//       //setUser(userScope);
//       setToken(tokenScope);

//       setLoadingApp(false);
//     }else{
//       setLogedIn(false);
//       setLoadingApp(false);
//     }
// };

// const initAuthReducer = async () =>{
//   try {
//     const jsonValue = await AsyncStorage.getItem('user')
//     let result = "hola"
//     return result;
//   } catch(e) {
//     console.log("error de buscar token")
//   }
// }