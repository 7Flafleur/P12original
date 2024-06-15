import Sidebar from "./Sidebar";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from "../api/api";
import { useState, useEffect } from "react";
import Dailyactivity from "./Dailyactivity";
import Nutrients from "./Nutrients";
import Averagesessions from "./Averagesessions";
import Performance from "./Performance";
import Score from "./Score";
import USE_MOCK_DATA from '../config';

export default function Main() {

    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);
    const [averageSessions, setaverageSessions] = useState(null);
    const [performance, setPerformance] = useState(null);
    const [errors, setErrors] = useState([]);




    // console.log('Rendering Main component');

    useEffect(() => {

        const fetchDataMain = () => {


            Promise.all([
                getUser(id).catch(err =>{
                    console.error(err);
                    throw err
                }),
                getUserActivity(id).catch(err =>{
                    console.error(err);
                    throw err
                }),
                getUserAverageSessions(id).catch(err =>{
                    console.error(err);
                    throw err
                }),
                getUserPerformance(id).catch(err =>{
                    console.error(err);
                    throw err
                })
            ])
                .then(([user, userActivity, userAverageSessions, userPerformance]) => {
                  
                        setUser(user);  // Update the user state
                        console.log("FEtched User", user)
                        setActivity(userActivity);
                        console.log("Fetched userActivity:", userActivity)
                        setaverageSessions(userAverageSessions);
                        console.log("Fetched averagesessions:", userAverageSessions)
                        setPerformance(userPerformance);
                        console.log("Fetched performance:", userPerformance)
                    
                })
                .catch(err => {
                    console.log("Error in Promise.all:", err);
                });

        };
        fetchDataMain();
    }, [id])

    const nutrients = user ? user.keyData : null;

    const score = user ? user.score : null;

    const performanceprop= user? performance :null;

    const sessions= averageSessions? averageSessions.sessions : null;




    return (
        <div className="Body">

            <Header />
            <div className={`main ${!user ? 'mainerror' : ''}`}>
                <Sidebar />
                <div className="dashboardcontent">
                    <section className="left">
                        <div className="h1">Bonjour <span className="firstname">{user ? user.firstName : "Utilisateur inconnu :)"}</span></div>
                       {user? (<div className="congrats">Félicitations! Vous avez explosé vos objectifs hier👏</div>) : (<div className="blank"> Hm... 🤔</div>)}
                        {!user && (
                <div className="error">
                    <div className="centralerror">Impossible de récupérer vos données : avez-vous saisi le bon identifiant?</div>
                </div>
            )}
                        {activity?( <Dailyactivity activity={activity} />): (
      <div>❓ 🤔 ❓ Données non disponibles!</div>
    )}
<div className="sessionsperfo">
                           {averageSessions? ( <Averagesessions sessions={sessions}/>) :    (<div className="emoji"> ❓ 🤔 ❓ Données non disponibles! </div>
    ) }
                           {performance?  (<Performance performance={performanceprop} kinds={performanceprop.kind}/>) :    (<div className="emoji"> ❓ 🤔 ❓ Données non disponibles! </div>
    ) }
                           {score? (<Score score={score} />)  :  (<div className="emoji"> ❓ 🤔 ❓ Données non disponibles! </div>
    ) }
                        </div>
   
                    </section>
                    <section className="right">
                     { nutrients? (  <Nutrients nutrients={nutrients}/>) :(
      <div className="emoji"> ❓ 🤔 ❓ Données non disponibles!</div>)
     }
                    </section>
                </div>
            </div>
        </div>
    )
}