const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    if(action.type === 'LOGIN_SUCCESS'){
        //console.log('Login success');
        return{
            ...state,
            authError: null
        }
    }else if(action.type === 'LOGIN_ERROR'){
        //console.log('Login error');
        return{
            ...state,
            authError: 'Login failed'
        }
    }else if(action.type === 'LOGOUT_SUCCESS'){
        //console.log('Logout success');
    }else if(action.type === 'SIGNUP_SUCCESS'){
        //console.log('Signup sucess');
        return {
            ...state,
            authError: null
        }
    }else if(action.type === 'SIGNUP_ERROR'){
        //console.log('Signup error');
        return {
            ...state,
            authError: action.err.message
        }
    }
    return state;
}
export default authReducer;