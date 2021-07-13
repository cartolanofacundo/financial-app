import { types } from "../../data/types";

const initialState = {
    amount: 0,
    category: "",
    account: "",
    description: "",
    date: "",
    type: "ingreso",
}


export const transactionReducer = (state, action) => {
    switch (action.type) {
        case types.addAmount:
            return {
                ...state,
                amount: action.payload.amount
            }
        case types.addCategoryId:
            return {
                ...state,
                category: action.payload.category
            }
        case types.addDate:
            return {
                ...state,
                date: action.payload.date
            }
        case types.addDescription:
            return {
                ...state,
                description: action.payload.description,
            }
        case types.addAccountId: {
            return {
                ...state,
                account: action.payload.account
            }
        }
        case types.addType: {
            return {
                ...state,
                type: action.payload.type
            }
        }
        case types.resetTransaction: {
            return {
                ...state,
                amount: 0,
                category: "",
                account: "",
                description: "",
                date: "",
                type: "ingreso",
            }
        }
        case types.addErrorTransaction:{
            return{
                ...state,
                errorMessageTransaction: action.payload.errorMessage
            }
        }
        case types.removeErrorTransaction:{
            return{
                ...state,
                errorMessageTransaction: ""
            }
        }
        default:
            break;
    }
}
