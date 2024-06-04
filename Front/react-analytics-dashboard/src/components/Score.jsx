import React from 'react';
import {
  RadialBarChart, RadialBar, Legend, ResponsiveContainer
} from 'recharts';


export default function Score(props){ 

  console.log("Score score",props)

  const data = [
    {
      name: 'Score', value:props.score , fill: '#FF0000',
    },
  ];

  console.log(typeof(props.score))

  const percentage = data[0].value*100


return (  <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={data} startAngle={90} endAngle={230}>
          <RadialBar
            minAngle={15}
            rx={5}
            ry={5}
            background
            clockWise
            dataKey="value"
            
            fill='#FF0000'
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-percentage">
      <p className='percent'>{percentage}%</p>
      <p className='objectif'>de votre objectif</p>
    </div>

  </div>)
}


