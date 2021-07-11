import React, { useEffect, useState } from "react";
import { AuthContext } from "./Components/Context/AuthContext";
import { RootStack } from "./routes/RootStack";

export default function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      validarToken();
    } catch (e) {
      // clear error
    }
  };
  const saveToken = async (token) => {
    try {
      const jsonValue = JSON.stringify(token);
      await AsyncStorage.setItem("token", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("token");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    setToken(getData());
    console.log(token, "TOKEN");
  }, []);

  useEffect(() => {
    setToken(getData());
    console.log(token, "TOKEN");
  }, [token]);

  return (
    <AuthContext.Provider value={(token, setToken, user, setUser)}>
      <RootStack />
    </AuthContext.Provider>
  );
}
