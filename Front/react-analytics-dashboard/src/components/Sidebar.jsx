import yoga from '../styles/pics/yoga.png';
import swim from '../styles/pics/swim.png';
import bike from '../styles/pics/bike.png';
import dumbbell from '../styles/pics/dumbbell.png';


export default function Sidebar(){


    return(
        <aside className="sidebar">
                    <ul>
                <li><a href="/activity"><img src={yoga} alt="" /></a></li>
                <li><a href="/swimming"><img src={swim} alt="" /></a></li>
                <li><a href="/cycling"><img src={bike} alt="" /></a></li>
                <li><a href="/weight-lifting"><img src={dumbbell} alt="" /></a></li>
            </ul>
            <span className='copyright'>Copyright, SportSee 2020</span>
        </aside>
    )
}