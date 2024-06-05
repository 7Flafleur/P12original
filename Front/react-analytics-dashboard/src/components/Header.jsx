import {useState} from 'react';
 import { Link } from 'react-router-dom';
import Icon from '../styles/pics/Icon.png'

export default function Header() {

    const [useMockData, setUseMockData] = useState(process.env.REACT_APP_USE_MOCK_DATA === 'true');

    function ChangeDataSource(){
        setUseMockData(!useMockData);
        console.log(useMockData ? 'Using mock data' : 'Using real data');
    }

 

    return (
        <header className="header">
            <Link to={`/`}>
                <div className="logo"><img src={Icon} alt="icon" /> SportSee</div>
            </Link>
            <nav>
                <span className='span' id="accueil" >Accueil</span>
                <span className='span' id="profil" >Profil</span>
                <span className='span' id="settings" onClick={ChangeDataSource}>Réglage</span>
                <span className='span' id="community">Communauté</span>
            </nav>
        </header>
    );
};