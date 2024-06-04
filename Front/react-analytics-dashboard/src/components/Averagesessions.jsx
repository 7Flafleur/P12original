
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
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
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
        <p className="label">{`${label} : ${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};




export default function Averagesessions(){

    return(

        <div className="averagesessions">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20, right: 20, left: 20, bottom: 0,
            }}
          >
         
            <XAxis dataKey="day" axisline={false} />
           
            <Tooltip content={<CustomTooltip />} />  
            <Line type="monotone" dataKey="duration" stroke="#ffffff" dot={{ r: 0 }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
}

