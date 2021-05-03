import React from 'react';
import "./Navbar.css";

function NavBar() {
    return (
        <div className="navigation-bar-conteiner">
            <a className="link-menu" href="/course">Kursy</a>
            <a className="link-menu" href="/test">Test</a>
            <a className="link-menu" href="/about">O nas</a>
            <a className="link-menu" href="/contact">Kontakt</a>
            <a className="login-button" href="/login">Zaloguj się</a>
        </div>
    )
}

export default NavBar;
