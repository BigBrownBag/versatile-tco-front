import React from 'react';
import './footer.css';
import text from './versatile-text.png';

const Footer = () => {
    return (
       <footer className='footer sticky-bottom'>
           <img src={text} alt="logo"/>
       </footer> 
    )
};

export default Footer;