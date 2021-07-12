export const types = {
    logIn: '[auth] signIn',
    logOut: '[auth] logout',
    signUp: '[auth] signUp',
    addError: '[auth] addError',
    removeError: '[auth] removeError',
    notAuthenticated: '[auth] notAuthenticated',
    addErrorSignUp: '[auth] addErrorSignUp',
    removeErrorSignUp: '[auth] removeErrorSignUp',
}

//signUp = payload.user
//signIn = payload.user && payload.token
//logOut = no necesita payload
