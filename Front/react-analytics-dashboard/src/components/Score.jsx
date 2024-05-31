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
  <div className="score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="value"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={{ top: 0, left: 350 }} />
        </RadialBarChart>
      </ResponsiveContainer>
  </div>
}


