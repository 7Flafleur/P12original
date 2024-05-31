import React from 'react';
import {
  RadialBarChart, RadialBar, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Score', value: 12, fill: '#FF0000',
  },
];

export default function Score(props){ 
return (  <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={data} startAngle={90} endAngle={180}>
          <RadialBar
            minAngle={15}
            
            background
            clockWise
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-percentage">
      <p className='percent'>12%</p>
      <p className='objectif'>de votre objectif</p>
    </div>

  </div>)
}


