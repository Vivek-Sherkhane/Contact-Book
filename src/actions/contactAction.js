import { CLEAR_CONTACT, CREATE_CONTACT, DELETED_SELECTED_CONTACT, DELETE_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constants/contactConstants"


export const addContact = (contact) =>{
    return {
        type : CREATE_CONTACT,
        payload : contact
    }
}

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload : id
});

export const updateContact = (contact) =>{
    return {
        type : UPDATE_CONTACT,
        payload : contact
    }
}

export const deleteContact = (id) =>{
    return {
        type : DELETE_CONTACT,
        payload : id
    }
}

export const selectAllContacts = (id_array) => ({
    type: SELECT_CONTACT,
    payload : id_array
})


export const clearAllContacts = () => ({
    type: CLEAR_CONTACT,
})

export const deleteAllContacts = () => ({
    type: DELETED_SELECTED_CONTACT,

})
