
import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">SportSee</div>
            <nav>
                <a href="/">Accueil</a>
                <a href="/profile">Profil</a>
                <a href="/settings">Réglage</a>
                <a href="/community">Communauté</a>
            </nav>
        </header>
    );
};

export default Header;
