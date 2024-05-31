import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

const data = [
  { subject: 'Cardio', A: 120, fullMark: 150 },
  { subject: 'Intensité', A: 98, fullMark: 150 },
  { subject: 'Vitesse', A: 86, fullMark: 150 },
  { subject: 'Force', A: 99, fullMark: 150 },
  { subject: 'Endurance', A: 85, fullMark: 150 },
  { subject: 'Energie', A: 65, fullMark: 150 },
];

export default function Performance(props){
 return ( <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  </div>
  );
}


