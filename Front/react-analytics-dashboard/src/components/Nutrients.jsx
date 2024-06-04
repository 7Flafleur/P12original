import caloriesIcon from "../styles/pics/calories-icon.png";
import proteinIcon from "../styles/pics/protein-icon.png";
import carbsIcon from "../styles/pics/carbs-icon.png";
import fatIcon from "../styles/pics/fat-icon.png";




export default function Nutrients(props) {

    // const props = {
    //     calorieCount: 1930,
    //     proteinCount: 155,
    //     carbohydrateCount: 290,
    //     lipidCount: 50
    // }

    console.log("Nutrient props:",props)

    console.log("caloriecount:",props.nutrients.calorieCount)


    return (
        <ul className="nutrients">
           <li><img src={caloriesIcon} alt="" /><p><span>{props.nutrients.calorieCount}kCal</span><span className="unit">Calories </span></p></li>
           <li><img src={proteinIcon} alt="" /><p><span>{props.nutrients.proteinCount}g</span><span className="unit">Proteines</span></p></li>
           <li><img src={carbsIcon} alt="" /><p><span></span>{props.nutrients.carbohydrateCount}g <span className="unit">Glucides</span></p></li>
           <li><img src={fatIcon} alt="" /><p><span></span>{props.nutrients.lipidCount}g <span className="unit">Lipides</span></p></li>
        </ul>
    )
}