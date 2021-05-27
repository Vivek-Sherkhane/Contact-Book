import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {combineReducers} from 'redux';
import { contactReducer } from './reducers/contactReducer';

const initialState = {
    contacts : {
        contacts : localStorage.getItem("contacts") ? 
                    JSON.parse(localStorage.getItem('contacts')) : [] ,
                    
        contact : null,
        selectedContacts : [],
    }
}

const reducer = combineReducers({
    contacts : contactReducer
})



const store = createStore(reducer, initialState, composeWithDevTools());

export default store;