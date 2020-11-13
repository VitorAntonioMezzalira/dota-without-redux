import React from 'react';
import './style.css';

function Aside() {

    function closeMenu() {
        document.querySelector('.sidebar').classList.remove('open');
    }

    return (
        <aside className="sidebar">
            <h3>Characters Attributes Types</h3>
            <button className="close-sidebar" onClick={ closeMenu } >X</button>
            <ul>
                <a href="./index.html"><li>Strenght</li></a>
                <a href="./index.html"><li>Agillity</li></a>
                <a href="./index.html"><li>Intelligence</li></a>
            </ul>
        </aside>
    )
};

export default Aside;