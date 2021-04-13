import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk];
const currentUser =localStorage.getItem('currentUser');
const initialState = {
    user: { currentUser : currentUser },
   };

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;