import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Header.scss';

const Header = () => {
    return (
        <header>
            <h1 className="header-title"><Link>MINJAE</Link></h1>
            <ul className="header-menu">
                <li><Link to="/login">Signin</Link></li>
                <li><Link to="/register">Signup</Link></li>
            </ul>
        </header>
    );
};

export default Header;