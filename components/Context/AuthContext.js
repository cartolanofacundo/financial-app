import React, { createContext, useReducer, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from "./authReducer";

import financeApi from "../../api/financeApi";

import { types } from "../../data/types";

const authInitialState = {
    status: "waiting",
    token: null,
    user: null,
    errorMessage: "",
    successMessage: "",
    errorMessageSignUp: "",
}

export const AuthContext = createContext(authInitialState);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    
    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            getUser(token)
        } else {
            dispatch({
                type: types.notAuthenticated,
            })
        }
    }

    const getUser = async (token) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const { data } = await financeApi.get(`/token`, config);
            if(data.tokenValid){
                dispatch({
                    type: types.logIn,
                    payload: {
                        token: token,
                        user: data.user
                    }
                })
            console.log(data);
            }else{
                dispatch({
                    type: types.notAuthenticated
                })
            }
            
        } catch (error) {
            console.log(error.message)
            dispatch({
                type: types.notAuthenticated,
            })
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
        dispatch({
            type: types.logOut
        })
    };

    const registrarse = async ({ first, last, email, password, repeat_password }) => {
        try {
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
        } catch (error) {
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
