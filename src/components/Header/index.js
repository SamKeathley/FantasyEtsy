import React from 'react';
import './styles.scss';
import Logo from './../../assets/fantasyEtsyLogo.png';

function Header() {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Fantasy Etsy LOGO" />
                </div>
            </div>
        </header>
    );
};

export default Header;