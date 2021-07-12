import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from "./authReducer";

import financeApi from "../../api/financeApi";

import { types } from "../../data/types";


const initialState = {
    token: null,
    user: null,
    status: 'non-authenticated',
    errorMessage: "",
    successMessage: "",
    errorMessageSignUp:"", 
}

const authInitialState = {
    status: "non-authenticated",
    token: null,
    user: null,
    errorMessage: "",
    successMessage: "",
    errorMessageSignUp: "",
}

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);
    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            console.log(token);
            const userId = await AsyncStorage.getItem('userId');
            if (userId) {
                console.log(userId)
                getUser(userId, token)
            }
        } else {
            dispatch({
                type: types.notAuthenticated,
            })
        }
    }

    const getUser = async (userId, token) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            console.log("este", userId)
            const { data } = await financeApi.get(`/users/${userId}`, config);
            console.log(data);
            dispatch({
                type: types.logIn,
                payload: {
                    token: token,
                    user: data
                }
            })
        } catch (error) {
            console.log(error.response.data);
        }


    }



    useEffect(() => {
        checkToken();
    }, [])



    const logIn = async ({ email, password }) => {
        try {
            const { data } = await financeApi.post('/users/login', {
                email,
                password
            });
            delete data.user.password;
            dispatch({
                type: types.logIn,
                payload: {
                    token: data.token,
                    user: data.user,
                }
            })
            await AsyncStorage.setItem('token', data.token);
            await AsyncStorage.setItem('userId', data.user._id)
            return data;
        } catch (error) {
            dispatch({
                type: types.addError,
                payload: {
                    errorMessage: "Credenciales no validas"
                }
            })
        }
    };

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('userId');
        dispatch({
            type: types.logOut
        })
    };

    const registrarse = async ({first, last, email, password, repeat_password}) => {
        try{
            const response = await financeApi.post('/users/', {
                first,
                last, 
                email,
                password,
                repeat_password
            });
            dispatch({
                type: types.signUp
            })
        }catch(error){
            dispatch({
                type: types.addErrorSignUp,
                payload: {
                    errorMessage: error.response.data
                }
            })
        }
        
        
    };

    const removeError = () => {
        dispatch({ type: types.removeError })
    }
    const removeErrorSignUp = () => {
        dispatch({ type: types.removeErrorSignUp })
    }



    return (
        <AuthContext.Provider value={{
            logIn, logOut, registrarse, removeError, removeErrorSignUp, ...state,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
