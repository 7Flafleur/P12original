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

        const fetchData = () => {
            const promises = [
                getUser(id).catch(err => {
                    console.error("Error in getUser:", err);
                    setErrors(errors => [...errors, { source: 'getUser', error: err }]);       //setter function instead of push to expand existing array!
                    return { error: err };
                }),
                getUserActivity(id).catch(err => {
                    console.error("Error in getUserActivity:", err);
                    setErrors(errors => [...errors, { source: 'getUserActivity', error: err }]);
                    return { error: err };
                }),
                getUserAverageSessions(id).catch(err => {
                    console.error("Error in getUserAverageSessions:", err);
                    setErrors(errors => [...errors, { source: 'getUserAverageSessions', error: err }]);
                    return { error: err };
                }),
                getUserPerformance(id).catch(err => {
                    console.error("Error in getUserPerformance", err);
                    setErrors(errors => [...errors, { source: 'getUserPerformance', error: err }]);
                    return { error: err }

                })
            ];

            Promise.all(promises)
                .then(([user, userActivity, userAverageSessions, userPerformance]) => {
                    if (user.error || userActivity.error || userAverageSessions.error || userPerformance.error) {
                        console.error("One or more promises failed:", { user, userActivity, userAverageSessions, userPerformance });

                    } else {
                        setUser(user);  // Update the user state
                        console.log("FEtched User", user)
                        setActivity(userActivity);
                        console.log("Fetched userActivity:", userActivity)
                        setaverageSessions(userAverageSessions);
                        console.log("Fetched averagesessions:", userAverageSessions)
                        setPerformance(userPerformance);
                        console.log("Fetched performance:", userPerformance)
                    }
                })
                .catch(err => {
                    console.error("Error in Promise.all:", err);
                });

        };
        fetchData();
    }, [id])

    const nutrients = user ? user.keyData : null;

    const score = user ? user.score : null;

    const performanceprop= user? performance :null;

    const sessions= user? averageSessions.sessions : null;

  



    return (
        <div className="Body">

            <Header />
            {errors.length > 0 && (
                <div className="error">
                    <p>There was an error fetching data:</p>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error.source}: {error.error.message}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="main">
                <Sidebar />
                <div className="dashboardcontent">
                    <section className="left">
                        <div className="h1">Bonjour <span className="firstname">{user ? user.userInfos.firstName : "Utilisateur inconnu :)"}</span></div>
                        <div className="congrats">Félicitations!Vous avez explosé vos objectifs hier👏</div>
                        {activity?( <Dailyactivity activity={activity} />): (
      <div>Loading...</div>
    )}
{ averageSessions && performance && score ?(<div className="sessionsperfo">
                            <Averagesessions sessions={sessions} />
                            <Performance performance={performanceprop} kinds={performanceprop.kind}/>
                            <Score score={score} />
                        </div>):
      (<div>Loading...</div>
    ) }
                    </section>
                    <section className="right">
                     { nutrients? (  <Nutrients nutrients={nutrients}/>) :(
      <div>Loading...</div>)
     }
                    </section>
                </div>
            </div>
        </div>
    )
}