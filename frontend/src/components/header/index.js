import React from 'react';
import { Link } from 'react-router-dom'
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
                <Link to="/"><h1>Dota</h1></Link>
            </div>
            <div className="account">
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/log-in">Log In</Link>
                <Link to="/profile/1">
                    <div>
                      <i class="fas fa-user"></i>
                    </div>
                  </Link>
            </div>
        </header>
    )
}

export default Header;