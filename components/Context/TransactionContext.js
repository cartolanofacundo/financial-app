import React, { createContext, useReducer, useEffect, useContext } from "react";
import { types } from "../../data/types";
import { transactionReducer } from "./transactionReducer";
import { UserContext } from "./UserContext";

const initialState = {
    amount: 0,
    category: null,
    account: null,
    description: "",
    date: "",
    type: "ingreso",
    errorMessageTransaction: ""
}


export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState)
    const { addTransaction } = useContext(UserContext)

    const addAmount = (amount = 0) => {
        if (amount > 0) {
            dispatch({
                type: types.addAmount,
                payload: {
                    amount: amount
                }
            })
        } else {
            dispatch({
                type: types.addErrorMessageTransaction,
                payload: {
                    errorMessage: "El monto no puede ser menor o igual a 0"
                }
            })
        }

    }
    const addCategoryId = (category = "") => {
        if (category === "") {
            dispatch({
                type: types.addErrorMessageTransaction,
                payload: {
                    errorMessage: "Debe seleccionar una categoria"
                }
            })
        } else {
            dispatch({
                type: types.addCategoryId,
                payload: {
                    category: category
                }
            })
        }
    }
    const addAccountId = (account = "") => {
        if (account === "") {
            dispatch({
                type: types.addErrorMessageTransaction,
                payload: {
                    errorMessage: "Debe seleccionar una cuenta"
                }
            })
        } else {
            dispatch({
                type: types.addAccountId,
                payload: {
                    account: account
                }
            })
        }
    }
    const addDescription = (description = "") => {
        if (description === "") {
            dispatch({
                type: types.addErrorMessageTransaction,
                payload: {
                    errorMessage: "Debe poner una descripcion"
                }
            })
        } else {
            dispatch({
                type: types.addDescription,
                payload: {
                    description: description
                }
            })
        }
    }
    const addDate = (date = "") => {
        if (date === "") {
            dispatch({
                type: types.addErrorMessageTransaction,
                payload: {
                    errorMessage: "Debe agregar una fecha"
                }
            })
        } else {
            dispatch({
                type: types.addDate,
                payload: {
                    date: date
                }
            })
        }
    }
    const addType = (type) => {
        console.log(type, "lo que llego al type")
        console.log("entrando a type")
        if (type === "") {
            dispatch({
                type: types.addErrorMessageTransaction,
                payload: {
                    errorMessage: "Debe agregar un tipo"
                }
            })
        } else {
            console.log("me llego un type")
            dispatch({
                type: types.addType,
                payload: {
                    type: type
                }
            })
        }
    }
    const resetTransaction = () => {
        dispatch({
            type: types.resetTransaction,
        })
    }
    const removeErrorTransaction = () => {
        dispatch({
            type: types.removeErrorTransaction
        })
    }
    const submitTransaction = () => {
        if (state.errorMessageTransaction === "") {
            const data = {
                type: state.type,
                category: state.category._id,
                description: state.description,
                amount: state.amount,
                account: state.account._id,
                date: state.date
            }
            addTransaction(data)
        }
    }

    return (
        <TransactionContext.Provider value={{
            ...state, addAmount, addCategoryId, addAccountId, addDate, addDescription, removeErrorTransaction, submitTransaction, resetTransaction, addType
        }}>
            {children}
        </TransactionContext.Provider>
    )
}