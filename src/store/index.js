import { createStore } from 'redux'
import reducer from './reducer'
import {combineReducers} from 'redux'


const store = createStore(combineReducers({
    counter : reducer,
}));


export default store;


