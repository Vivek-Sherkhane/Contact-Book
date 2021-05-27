import { CLEAR_CONTACT, CREATE_CONTACT, DELETED_SELECTED_CONTACT, DELETE_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constants/contactConstants";


export const contactReducer = (state = {contacts : [], contact : {}, selectedContacts : []}, action) =>{
    switch(action.type){
        case CREATE_CONTACT :
            return {
                ...state,
                contacts : [...state.contacts, action.payload]
            }
        
        case GET_CONTACT :
            let arr = state.contacts.filter(contact => contact.id === action.payload); 
            arr = arr.values();
            for(let val of arr){
                arr = val;
            }
            return {
                ...state,
                contact : arr

            }
            
        case UPDATE_CONTACT :
            return{
                ...state,
                contacts : state.contacts.map(contact => 
                    contact.id === action.payload.id ? action.payload : contact)
            }
            
        case DELETE_CONTACT :
            return {
                ...state,
                contacts : state.contacts.filter(contact => contact.id != action.payload)
            }
        
        case SELECT_CONTACT :
            return {
                ...state,
                selectedContacts : action.payload
            }
        
        case CLEAR_CONTACT :
            return{
                ...state,
                selectedContacts : []
            }

        
        case DELETED_SELECTED_CONTACT:
            return{
                ...state,
                contacts : []
            }
        
        default :
        return state;
    }
}