import { types } from "../../data/types";

const initialState = {
    categories: [],
    accounst: [],
    balance: 0,
    transactions: [],
    transfers: [],
    errorMessage: "",
}


export const userReducer = (state, action) => {
    switch (action.type) {
        case types.getCategories:
            return{
                ...state,
                categories: [...action.payload.categories]
            }
        case types.addCategory:
                return{
                    ...state,
                    categories: [...state.categories, ...action.payload.category]
                }
        case types.addAccount:
            return{
                ...state,
                accounts: [...state.accounts, ...action.payload.account]
            }
        case types.getAccounts:
            return {
                ...state,
                accounts: [...action.payload.accounts]
            }
        case types.addTrasaction:{
            return{
                ...state,
                transactions: [...action.payload.transactions],
            }
        }
        case types.getTransactions:
            return {
                ...state,
                transactions: [...action.payload.transactions]
            }
        case types.getBalance:{
            return{
                ...state,
                balance: action.payload.balance
            }
        }
        case types.addTranfer:{
            return{
                ...state,
                transfers: [...state.transfers, ...action.payload.transfer],
                accounts: [...action.payload.accounts]
            }
        }
        case types.getTransfers:{
            return{
                ...state,
                transfers: [...action.payload.transfers]
            }
        }
        case types.addErrorFetch:
            return{
                ...state,
                errorMessageUser: action.payload.errorMessage
            }
        case types.removeErrorFetch:
            return{
                ...state,
                errorMessageUser: "",
            }
        default:
            return state;
    }
}