import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useParams } from 'react-router-dom';

const EditContact = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [name,setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email,setEmail] = useState("");

    const contact = useSelector(state => state.contacts.contact);

    useEffect(() =>{
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        
    },[contact]);

    useEffect(() =>{
        dispatch(getContact(id));
    },[]);

    const editContact = (e) =>{
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name : name,
            phone : phone,
            email : email
        });
        dispatch(updateContact(update_contact));
        props.history.push("/");
    }

    

    return (
        <div className="card border-0 shadow">
            <div className="card-header">New Contact</div>
            <div className="card-body">
                <form onSubmit={e => editContact(e)}>
                    <div className="form-group mb-2">
                        <input 
                         type="text"
                         className="form-control"   
                         placeholder="Enter Contact Name"
                         value={name}
                         onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input 
                         type="text"
                         className="form-control"   
                         placeholder="Enter Contact Number"
                         value={phone}
                         onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input 
                         type="text"
                         className="form-control"   
                         placeholder="Enter Contact Email"
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact