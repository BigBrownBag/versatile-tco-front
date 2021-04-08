import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
    return (
        <header className="service-header row">
            <img src={logo} alt="logo"/>
            <div  className='links'>
                <NavLink className="another-link" to="/">Калькулятор</NavLink>
                <NavLink className="support-link" to="/support">О нас</NavLink>
            </div>
        </header>
    )
};
export default Header;