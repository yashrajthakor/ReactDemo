import userReducer from './Auth/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;