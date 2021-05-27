import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav className="navbar fixed-top shadow navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Contact Book
                </Link>
                <Link to="/addcontact" >
                    <button type="button" class="btn btn-light ml-auto">Create Contact</button>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar
