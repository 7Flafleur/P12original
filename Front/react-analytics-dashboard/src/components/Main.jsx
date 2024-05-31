import Sidebar from "./Sidebar";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from "../api/api";
import { useState, useEffect } from "react";
import Dailyactivity from "./Dailyactivity";

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
                        setActivity(userActivity);
                        setaverageSessions(userAverageSessions);
                        setPerformance(userPerformance);
                    }
                })
                .catch(err => {
                    console.error("Error in Promise.all:", err);
                });
 
        };
        fetchData();
    }, [id])



    return (
        <div className="Body">
            <Header />

            <div className="main">
                <Sidebar />
                <div className="dashboardcontentleft">
                    <section className="greeting">
                        <div className="h1">Bonjour <span className="firstname">{user ? user.data.userInfos.firstName : "Utilisateur inconnu :)"}</span></div>
                        <div className="congrats">Félicitations!Vous avez explosé vos objectifs hier👏</div>
                        <Dailyactivity/>
                        <div className="sessionsperfo"></div>
                    </section>
                    <section className="energyright">
                        <ul className="macros">

                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}