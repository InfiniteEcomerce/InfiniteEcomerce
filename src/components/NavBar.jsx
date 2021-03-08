import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='NavBar'>
            <div className="nav-wrapper deep-orange accent-2 ">
                <Link to="/home" className="brand-logo" > <img className='logo-image' src="images/logo.png" alt="" /></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/Home">Home</Link>></li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="#">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;