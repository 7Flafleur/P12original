
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'L', duration: 30 },
  { day: 'M', duration: 45 },
  { day: 'M', duration: 50 },
  { day: 'J', duration: 40 },
  { day: 'V', duration: 60 },
  { day: 'S', duration: 70 },
  { day: 'D', duration: 80 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', color: '#000', padding: '5px', border: '1px solid #ccc' }}>
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};




export default function Averagesessions(){

    return(

        <div className="averagesessions">
        <ResponsiveContainer width="100%" height="100%">
        <p className='durée'>Durée moyenne des séances</p>

          <LineChart
            data={data}
       
          >
         
            <XAxis dataKey="day" axisLine={false} stroke='#fff' opacity={0.7} tickLine={false} tickMargin={-20}  />
           
            <Tooltip content={<CustomTooltip  />} />  
            <Line type="monotone" dataKey="duration" stroke="#ffffff" dot={{ r: 0 }} activeDot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

