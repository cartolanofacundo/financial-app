import { types } from "../../data/types";

const initialState = {
    categories: [],
    accounts: [],
    balance: 0,
    transactions: [],
    transfers: [],
    errorMessage: "",
}


export const userReducer = (state, action) => {
    switch (action.type) {
        case types.addCategory:
            console.log("estoy en addCategory")
            return {
                ...state,
                categories: [...state.categories, ...action.payload.category]
            }
        case types.getCategories:
            console.log("estoy en getCategories")
            return {
                ...state,
                categories: [...action.payload.categories]
            }
        case types.addAccount:
            console.log("estoy en addAccounts")
            return {
                ...state,
                accounts: [...state.accounts, ...action.payload.account]
            }
        case types.getAccounts:
            console.log("estoy en getAccounts")
            return {
                ...state,
                accounts: [...action.payload.accounts]
            }
        case types.addTrasaction: {
            console.log("estoy en addTransaction")
            return {
                ...state,
                transactions: [...state.transactions, action.payload.transactions],
                categories: [...action.payload.categories],
                accounts: [...action.payload.accounts],
                balance: action.payload.balance
            }
        }
        case types.getTransactions:
            console.log("estoy en getTransactions")
            return {
                ...state,
                transactions: [...action.payload.transactions]
            }
        case types.getBalance: {
            console.log("estoy en getBalance")
            return {
                ...state,
                balance: action.payload.balance
            }
        }
        case types.addTranfer: {
            console.log("estoy en addTransfer")
            return {
                ...state,
                transfers: [...state.transfers, ...action.payload.transfer],
                accounts: [...action.payload.accounts]
            }
        }
        case types.getTransfers: {
            console.log("estoy en getTransfer")
            return {
                ...state,
                transfers: [...action.payload.transfers]
            }
        }
        case types.addErrorFetch:
            console.log("estoy en addError")
            return {
                ...state,
                errorMessageUser: action.payload.errorMessage
            }
        case types.removeErrorFetch:
            console.log("estoy en removeError")
            return {
                ...state,
                errorMessageUser: "",
            }
        default:
            return state;
    }
}