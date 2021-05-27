import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid';

const AddContact = (props) => {
    const [name,setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email,setEmail] = useState("");

    const dispatch = useDispatch();

    const createContact = (e) =>{
        e.preventDefault();
        dispatch(addContact({id : shortid.generate(),name,phone,email}));
        props.history.push("/");
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">New Contact</div>
            <div className="card-body">
                <form onSubmit={e => createContact(e)}>
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
                    <button className="btn btn-primary" type="submit">Add contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
