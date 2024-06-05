


import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function Score(props) {
  const data = [
    { name: 'Score', value: props.score },
    { name: 'Remaining', value: 1 - props.score },
  ];

  const COLORS = ['#FF0000', '#FFFFFF']; // Red for the score, white for the remaining part

  return (
    <div className="score">
      <ResponsiveContainer className="responsivescore" width="100%" height="100%">
      <span className='title'>Score</span>
        <PieChart className='piechart'>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="85%"
            outerRadius="95%"
            fill="#fff"
            dataKey="value"
            startAngle={90}
            endAngle={450}
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie className='pie2'
            data={[{ value: 1 }]}
            cx="50%"
            cy="50%"
            innerRadius="0"
            outerRadius="84%"
            fill="#FFFFFF"
            startAngle={90}
            endAngle={450}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="score-percentage">
        <p className='percent'>{props.score * 100}%</p>
        <p className='objectif'>de votre objectif</p>
      </div>
    </div>
  );
}