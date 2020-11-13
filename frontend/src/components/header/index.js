import React from 'react';
import './style.css';

function Header() {

    function openMenu() {
        const demo = document.querySelector('.sidebar').classList.add('open');
    }

    return (
        <header className="header">
            <div className="menu-title">
                <div className="menu-icon" onClick={openMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <a href="./index.html"><h1>Dota</h1></a>
            </div>
            <div className="account">
                <a href="./index.html">Sign Up</a>
                <a href="./index.html">Log In</a>
            </div>
        </header>
    )
}

export default Header;