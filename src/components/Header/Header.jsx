import React from 'react';
import s from'./Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
             <img className="icon" src="https://camo.githubusercontent.com/9f732353309b67be8e3945905b74751f7523b723/687474703a2f2f736e61707376672e696f2f6173736574732f696d616765732f6c6f676f2e737667" alt="img"></img>
        </header>
        
    );
}

export default Header;