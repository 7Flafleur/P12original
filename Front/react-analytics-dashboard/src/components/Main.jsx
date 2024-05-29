import Sidebar from "./Sidebar";

export default function Main(){
    // const userid= 12;
    const firstname = 'Karl';


    return(
        <div className="main">
             <Sidebar/>
            <div className="dashboardcontent">
                <h1>Bonjour {firstname}</h1>
            </div>


        </div>
    )
}