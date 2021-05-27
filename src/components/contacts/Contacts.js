import React, { useState, useEffect } from 'react';
import { useSelector , useDispatch} from "react-redux";
import { clearAllContacts, deleteAllContacts, selectAllContacts } from '../../actions/contactAction';
import Contact from './Contact';

function Contacts() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    localStorage.setItem("contacts",JSON.stringify(contacts));
    const selectedContacts = useSelector(state => state.contacts.selectedContacts);
    const [selectAll, setSelectAll]  = useState(false);

    useEffect(() =>{
        if(selectAll){
            dispatch(selectAllContacts(contacts.map(contact => contact.id)));
        } else {
            dispatch(clearAllContacts());
            
        }
    },[selectAll])

    const deleteContacts = () =>{
        dispatch(deleteAllContacts());
        localStorage.removeItem("contacts");
    }

    return (
    <div>
    {
        selectedContacts.length > 0 ? (
            <button 
            className="btn btn-danger mb-3 text-white shadow" 
            onClick={() => deleteContacts() }>delete All</button>
        ) : null
    }
        <table className="table shadow">
            <thead className="bg-danger text-white"> 
                <tr>
                    <th>
                        <div className="custom-control custom-checkbox">
                            <input 
                            id="selectAll"
                             type="checkbox" 
                             className="custom-control-input"
                            value={selectAll}
                            onClick={() => setSelectAll(!selectAll)}
                             />
                            <label htmlFor="selectAll" className="custom-control-label"></label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                contacts.map(item =>{
                    return (
                        <Contact item={item} key={item.id} selectAll={selectAll}/>
                    )
                })
            }
            </tbody>
        </table>
    </div>
    )
}

export default Contacts
