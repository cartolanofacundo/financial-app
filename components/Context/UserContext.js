import React, { createContext, useReducer, useEffect, useContext } from "react";
import { userReducer } from "./userReducer";
import financeApi from "../../api/financeApi";
import { types } from "../../data/types";
import { AuthContext } from "./AuthContext";


const userInitialState = {
    categories: [],
    accounts: [],
    balance: 0,
    transactions: [],
    transfers: [],
    errorMessageUser: "",
}

export const UserContext = createContext(userInitialState);

export const UserProvider = ({ children }) => {
    const { user, token, logOut } = useContext(AuthContext);
    const [state, dispatch] = useReducer(userReducer, userInitialState)

    useEffect(() => {
        if (token) {
            getInitialData();
        }
    }, [])

    const getInitialData = async () => {
        await getBalance();
        await getAccounts();
        await getCategories();
        await getTransactions();
        await getTransfers();
    }
    const getCategories = async () => {
        const categories = await getFetch("categories")
        if (categories === "Categoría no encontrada") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "Error al obtener las categorias"
                }
            })
        } else {
            dispatch({
                type: types.getCategories,
                payload: {
                    categories: categories
                }
            })
        }

    }
    const getTransactions = async () => {
        const transactions = await getFetch("transactions")
        if (transactions === "Transacción no encontrada") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "Error al obtener las transacciones"
                }
            })
        } else {
            dispatch({
                type: types.getTransactions,
                payload: {
                    transactions: transactions
                }
            })
        }

    }
    const getAccounts = async () => {
        const accounts = await getFetch("accounts")
        if (accounts === "Cuentas no encontradas") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "Error al obtener las cuentas"
                }
            })
        } else {
            dispatch({
                type: types.getAccounts,
                payload: {
                    accounts: accounts
                }
            })
        }
    }
    const getBalance = async () => {
        const balance = await getFetch("balances")
        if (balance === "Balance no encontrado") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "Error al obtener el balance"
                }
            })
        } else {
            dispatch({
                type: types.getBalance,
                payload: {
                    balance: balance
                }
            })
        }
    }
    const getTransfers = async () => {
        const transfers = await getFetch("transfers")
        if (transfers === "Transferencias no encontradas") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "Error al obtener las transferencias"
                }
            })
        } else {
            dispatch({
                type: types.getTransfers,
                payload: {
                    transfers: transfers
                }
            })
        }
    }
    const getFetch = async (route) => {
        if (user != null && token != null) {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            try {
                const { data } = await financeApi.get(`/${route}/${user._id}`, config);
                return data;
            } catch (error) {
                switch (route) {
                    case "categories":
                        return "Categoría no encontrada"
                    case "balances":
                        return "Balance no encontrado"
                    case "transfers":
                        return "Transferencias no encontradas"
                    default:
                        error.message;
                }
            }
        } else {
            logOut();
        }
    }

    const addAccount = async ({ title, icon, balance = 0 }) => {
        const body = { title, icon, balance }
        const account = await postFetch("accounts", body)
        if (account === "No se ha podido agregar la cuenta") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "Error al agregar la cuenta"
                }
            })
        } else {
            dispatch({
                type: types.addAccount,
                payload: {
                    accounts: account
                }
            })
        }

    }
    const addTransaction = async ({ type, category, description, amount, account, date }) => {
        const body = { type, category, description, amount, account, date }
        const data = await postFetch("transactions", body)
        console.log(data)
        if (data === "No se ha podido agregar la transaccion") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "No se ha podido agregar la transaccion"
                }
            })
        } else {
            dispatch({
                type: types.addTransaction,
                payload: {
                    transactions: data.transaction
                }
            })
        }
    }
    const addCategory = async ({ title, type, icon }) => {
        const body = { title, type, icon }
        const category = await postFetch("categories", body)
        if (category === "No se ha podido agregar la categoria") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "No se ha podido agregar la categoria"
                }
            })
        } else {
            dispatch({
                type: types.addCategory,
                payload: {
                    categories: category
                }
            })
        }

    }
    const addTransfer = async ({ incomeAccountId, outcomeAccountId, date, amount }) => {
        const body = { incomeAccountId, outcomeAccountId, date, amount }
        const data = await postFetch("transfers", body)
        if (data === "No se ha podido agregar la transferencia") {
            dispatch({
                type: types.addErrorFetch,
                payload: {
                    errorMessage: "No se ha podido agregar la transferencia"
                }
            })
        } else {
            dispatch({
                type: types.getTransfers,
                payload: {
                    transfers: data.transfer,
                    accounts: data.accounts
                }
            })
        }
    }

    const postFetch = async (route, body) => {
        if (user != null && token != null) {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            try {
                const { data } = await financeApi.post(`/${route}/${user._id}`, body, config);
                return data;
            } catch (error) {
                dispatch({
                    type: types.addErrorFetch,
                    payload: {
                        errorMessage: "Error en el fetch"
                    }
                })
            }
        } else {
            logOut();
        }
    }
    const removeErrorUser = () =>{
        dispatch({
            type: types.removeErrorUser
        })
    }
    return (
        <UserContext.Provider value={{
            ...state, getAccounts, getBalance, getCategories, getTransactions, getTransfers, addAccount, addCategory, addTransfer, addTransaction, removeErrorUser
        }}>
            {children}
        </UserContext.Provider>
    )

}