import React from 'react';
import style from './footer.module.css';
import text from './versatile-text.png';

const Footer = () => {
    return (
       <footer className={style.footer}>
           <img src={text} alt="logo"/>
       </footer> 
    )
};

export default Footer;