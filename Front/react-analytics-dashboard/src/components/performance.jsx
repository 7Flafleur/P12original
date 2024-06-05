import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

const data = [
  { kind: 'Cardio', value: 120, fullMark: 120 },
  { kind: 'Intensité', value: 98, fullMark: 150 },
  { kind: 'Vitesse', value: 86, fullMark: 150 },
  { kind: 'Force', value: 99, fullMark: 150 },
  { kind: 'Endurance', value: 85, fullMark: 150 },
  { kind: 'Energie', value: 65, fullMark: 150 },
];

export default function Performance(props){

  console.log(" Performance props ", props)

const perf=props.performance.data


const maxVal = Math.max(...perf.map(item => item.value));

let newperf = perf.map((item) => {
  let kind;
  switch(item.kind){
    case 1:
      kind = 'Cardio';
      break;
    case 2:
      kind = 'Energie';
      break;
    case 3:
      kind = 'Endurance';
      break;
    case 4:
      kind = 'Force';
      break;
    case 5:
      kind = 'Vitesse';
      break;
    case 6:
      kind = 'Intensité';
      break;
    default:
      kind = item.kind;
  }
  return {...item, kind, fullMark: maxVal};
});


console.log("NewPerf",newperf)



newperf = newperf.reverse()











 return ( <div className="performance" style={{ padding: 0 }}>
      <ResponsiveContainer width="100%" height="100%" style={{padding:0,margin:0}} >
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={newperf}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" fontSize={11}  color='#FFF' tickLine={false} tick={{fill:'#fff'}} />
          <PolarRadiusAxis domain={[0, maxVal]} tick={false} axisLine={false} tickLine={false} />
          <Radar name="User" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  </div>
  );
}


