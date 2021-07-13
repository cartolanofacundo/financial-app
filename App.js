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