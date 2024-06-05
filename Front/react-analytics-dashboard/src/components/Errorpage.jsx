import { useState } from "react";
import { Link } from "react-router-dom";

export default function Errorpage(){

 
        const [userId, setUserId] = useState('');
      
        const handleInputChange = (event) => {
          setUserId(event.target.value);
        };
      

    return(
<div  className="shrug">
    <div> 404</div>
<p className="shrugging">¯\_(ツ)_/¯</p>
<p>UserId?</p>
<input type="text" id="userId" value={userId} onChange={handleInputChange}></input>
<Link to={`/user/${userId}`}><button id="go">Go</button></Link>
</div>

    )
}