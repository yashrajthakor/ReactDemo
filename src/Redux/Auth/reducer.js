import {UserActionTypes} from './ActionTypes';

const INITIAL_STATE = {
    currentUser: null,
    PublisherProfileDetail: null,
    error: '',
    loading: false
};
const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case UserActionTypes.LOGIN_USER:
            return {error:'', currentUser: action.payload, loading: false };
        case UserActionTypes.LOGIN_USER_REQUEST:
            return {...state, error:'', loading: true };
        case UserActionTypes.LOGIN_USER_FAIL:
            return {currentUser: null, error : action.payload, loading: false };
            default:
                return state;
    }

};
export default userReducer;