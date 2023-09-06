import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
    token : "",
    isAuth:false,
    isLoading : false,
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case LOGIN_REQUEST:{
            return {
                ...state,
                isAuth:false,
                isLoading:true,
                isError:false
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                isAuth:true,
                token : payload,
                isLoading:true,
                isError:false
            }
        }
        default : 
            return state;
    }
}