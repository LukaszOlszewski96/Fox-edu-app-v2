import React from 'react';
import "./Navbar.css";

function NavBar() {
    return (
        <div className="navigation-bar-conteiner">
            <a className="link-menu" href="/">Kursy</a>
            <a className="link-menu" href="/">Test</a>
            <a className="link-menu" href="/">O nas</a>
            <a className="link-menu" href="/">Kontakt</a>
            <a className="login-button" href="/">Zaloguj się</a>
        </div>
    )
}

export default NavBar;
