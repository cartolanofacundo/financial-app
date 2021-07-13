import { types } from "../../data/types";

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.logIn:
            return{
                ...state,
                token: action.payload.token,
                status: 'authenticated',
                user: action.payload.user
            }
        case types.logOut:
            return{
                ...state,
                status: 'non-authenticated',
                token: null,
                user: null
            }
        case types.addError:
            return{
                ...state,
                user: null,
                status: 'non-authenticated',
                token: null,
                errorMessage: action.payload.errorMessage
            }
        case types.removeError:
            return{
                ...state,
                errorMessage: ""
            }
        case types.notAuthenticated:
            return{
                ...state,
                status: 'non-authenticated',
                token: null,
                user: null
            }
        case types.signUp:
            return{
                ...state,
                successMessage: "success"
            }
        case types.addErrorSignUp:
            return{
                ...state,
                errorMessageSignUp: action.payload.errorMessage
            }
        case types.removeErrorSignUp:
            return{
                ...state,
                errorMessageSignUp: ""
            }
        case types.checking:
            return{
                ...state,
                status: "waiting"
            }
        default:
            return state;
    }
}