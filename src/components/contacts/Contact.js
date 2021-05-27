import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { deleteContact } from '../../actions/contactAction';

function Contact({item,selectAll}) {

    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch();
    const deleteSingleContact = (id) =>{
        dispatch(deleteContact(id));
    }

    return (
    <tr className="data-row">
        <td >
            <div className="custom-control custom-checkbox">
                <input id="dummy" checked={selectAll} type="checkbox" className="custom-control-input"/>
                <label htmlFor="dummy" className="custom-control-label"></label>
            </div>
        </td>
        <td> <Avatar className="mr-3" name={item.name} size="45" round={true}/> {item.name}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td className="actions">
            <span className="material-icons text-danger mr-2" onClick={() => deleteSingleContact(item.id) }>
            delete</span>
            <Link to={`/editcontact/${item.id}`} ><span className="material-icons">edit</span></Link>
        </td>
    </tr>
    )
}

export default Contact
