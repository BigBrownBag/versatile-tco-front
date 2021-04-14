import React from 'react';
import style from'./header.module.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const Header = () => {
    return (
        <header className={style.row}>
            <div className={style.service_header}>
                <img src={logo} alt="logo"/>
                <div  className={style.links}>
                    <NavLink className={style.another_link} to="/">Калькулятор</NavLink>
                    <NavLink className={style.support_link} to="/support">О нас</NavLink>
                    <div className={style.wrapp_login}>
                        <div className="d-flex align-items-center ml-4">
                            <NavLink className="support-link mr-2" to="#">Вход</NavLink>
                            <span>|</span>
                            <NavLink className="support-link ml-2" to="#t">Регистрация</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;