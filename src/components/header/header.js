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
                <div className="wrapp-login d-flex align-items-center ml-4">
                    <NavLink className="support-link mr-2" to="#">Вход</NavLink>
                    <span>|</span>
                    <NavLink className="support-link ml-2" to="#t">Регистрация</NavLink>
                </div>
            </div>
        </header>
    )
};
export default Header;