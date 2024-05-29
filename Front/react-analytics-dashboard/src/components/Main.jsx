import Sidebar from "./Sidebar";
import { useParams } from 'react-router-dom';
import getUser from "../api/api";
import { useState, useEffect } from "react";

export default function Main(){
    
    const {userId}=useParams();
    const [user,setUser] =useState(null);
    const [error,setError] =useState(null);


    useEffect(()=>{
        const fetchData = async () => {

            try{
                const userData = await getUser(userId);
                setUser(userData);
            } catch(err){
                setError(err.message);
            }
        };

    }
    )

  
    



    return(
        <div className="main">
             <Sidebar/>
            <div className="dashboardcontent">
                <h1>Bonjour {}</h1>
            </div>


        </div>
    )
}