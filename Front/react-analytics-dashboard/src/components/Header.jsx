import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">SportSee</div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/profile">Profil</Link>
                <Link to="/settings">Réglage</Link>
                <Link to="/community">Communauté</Link>
            </nav>
        </header>
    );
};