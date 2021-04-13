import {UserActionTypes} from './ActionTypes';
import axios from 'axios';
import {BASE_URL} from '../../Config/Config';

const signIn=(email,password) =>dispatch =>{
var reqBody= "username="+email+"&password="+password+"&grant_type=password";
dispatch({
    type: UserActionTypes.LOGIN_USER_REQUEST,
});
axios.post(`${BASE_URL}/token`, reqBody)
    .then((response) => {
        if(response.data) {
            // setLoggedUserData(JSON.stringify(response.data));
            return dispatch({
                type: UserActionTypes.LOGIN_USER,
                payload: response.data
            });
        }
    })
    .catch((error) => {
        return dispatch({
            type: UserActionTypes.LOGIN_USER_FAIL,
            payload: error.error_description === undefined ? error : error.error_description
        });
    });
};

export {signIn};