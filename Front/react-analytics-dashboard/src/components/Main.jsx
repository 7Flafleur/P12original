import Sidebar from "./Sidebar";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from "../api/api";
import { useState, useEffect } from "react";

export default function Main() {

    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);


    console.log('Rendering Main component');




    useEffect(() => {

        console.log('Running useEffect');


        const fetchData = async () => {

            try {
                const userData = await getUser(id);
                setUser(userData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }
        , [id]);



    return (
        <div className="Body">
             <Header />
           
            <div className="main">
            <Sidebar />
                <div className="dashboardcontent">
                    <h1>Bonjour <span className="firstname">{user? user.data.userInfos.firstName : "Utilisateur inconnu :)"}</span></h1>
                </div>
            </div>
        </div>
    )
}