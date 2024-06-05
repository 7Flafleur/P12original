import { useState } from 'react';

import {
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from 'recharts';

let xValue=null;


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // xValue=payload[0].day;
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', color: '#000', padding: '5px', border: '1px solid #ccc' }}>
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};




export default function Averagesessions(props){


  const [activeIndex,setActiveindex] = useState(7)

  function MouseOverState(state){
     if(state.isTooltipActive){
      const index = sessions.findIndex(session => session.day === state.activeLabel);

      setActiveindex(index)
     }
     else{
      setActiveindex(7)
     }
 
  }


console.log("Session props:", props.sessions)

const sessions = props.sessions.map((item) => {
  let day;
  switch(item.day){
    case 1:
      day = 'L';
      break;
    case 2:
      day = 'M';
      break;
    case 3:
      day = 'M';
      break;
    case 4:
      day = 'J';
      break;
    case 5:
      day = 'V';
      break;
    case 6:
      day = 'S';
      break;
    case 7:
      day= 'D'
      break;
    default:
      day = item.day;
  }
  return {...item, day};
});

const minVal = Math.min(...sessions.map(item => item.sessionLength));
const maxVal = Math.max(...sessions.map(item => item.sessionLength));


console.log("active index ",activeIndex )




    return(

      
        <div className="averagesessions">
        <ResponsiveContainer className="responsivecontainer" width="100%" height="100%">
        <p className='durée'>Durée moyenne des séances</p>

          <LineChart width="100%" height="100%"
            data={sessions} 
            onMouseMove={MouseOverState}
            onMouseLeave={() => setActiveindex(7)}
          >
         
         <XAxis dataKey="day" axisLine={false} stroke='#fff' opacity={0.7} tickLine={false} tickMargin={-20} padding={{ left: 10, right: 10 }} />
            <YAxis domain={[minVal - 20, maxVal + 20]} hide={true} />
            <Tooltip content={<CustomTooltip  />} />  
            <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={{ r: 0 }} activeDot={{ r: 3 }} />
            <CartesianGrid stroke="#fff" opacity={0.5} horizontal={false} /> {/* Add this line */}

              <ReferenceArea className='referencearea'
                x1={activeIndex}
                x2={6}
                strokeOpacity={0.8}
           
                
                
               
                fill="#979797"
              />
            
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

