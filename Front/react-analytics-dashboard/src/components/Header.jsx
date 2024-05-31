import React from 'react';
// import { Link } from 'react-router-dom';
import Icon from '../styles/pics/Icon.png'

export default function Header() {
    return (
        <header className="header">
            <div className="logo"><img src={Icon} alt="icon" /> SportSee</div>
            <nav>
                <span className='span' id="accueil" >Accueil</span>
                <span className='span' id="profil" >Profil</span>
                <span className='span' id="settings">Réglage</span>
                <span className='span' id="community">Communauté</span>
            </nav>
        </header>
    );
};