import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../actions/types';

//리듀서 함수 정의
export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
        
        case REGISTER_USER:
            return {...state, register: action.payload}
        
        case AUTH_USER:
            return {...state, userData: action.payload}

        default:
            return state;
    }
} 