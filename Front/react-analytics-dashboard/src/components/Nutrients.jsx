import caloriesIcon from "../styles/pics/calories-icon.png";
import proteinIcon from "../styles/pics/protein-icon.png";
import carbsIcon from "../styles/pics/carbs-icon.png";
import fatIcon from "../styles/pics/fat-icon.png";




export default function Nutrients(props) {

    const keyData = {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
    }


    return (
        <ul className="nutrients">
           <li><img src={caloriesIcon} alt="" /><p><span>{keyData.calorieCount}kCal</span><span className="unit">Calories </span></p></li>
           <li><img src={proteinIcon} alt="" /><p><span>{keyData.proteinCount}g</span><span className="unit">Proteines</span></p></li>
           <li><img src={carbsIcon} alt="" /><p><span></span>{keyData.carbohydrateCount}g <span className="unit">Glucides</span></p></li>
           <li><img src={fatIcon} alt="" /><p><span></span>{keyData.lipidCount}g <span className="unit">Lipides</span></p></li>
        </ul>
    )
}