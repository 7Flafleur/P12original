// import React from 'react';
// import {
//   RadialBarChart, RadialBar, ResponsiveContainer,PolarGrid
// } from 'recharts';


// export default function Score(props){ 

//   console.log("Score score",props)

//   const data = [
//     {
//       name: 'Score', value:props.score , fill: '#FF0000',
//     },
//     {
//       name: 'Background', value: 1, fill: '#FFFFFF',
//     },
//   ];

//   console.log(typeof(props.score))

//   const percentage = data[0].value*100


// return (  <div className="score">
//       <ResponsiveContainer width="100%" height="100%">
//         <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={data} startAngle={90} >
        
//           <RadialBar
//             minAngle={15}
//             rx={5}
//             ry={5}
//             background
//             clockWise
//             dataKey="value"
            
      
//           />
//         </RadialBarChart>
//       </ResponsiveContainer>
//       <div className="score-percentage">
//       <p className='percent'>{percentage}%</p>
//       <p className='objectif'>de votre objectif</p>
//     </div>

//   </div>)
// }




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
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="80%"
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
            outerRadius="69%"
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