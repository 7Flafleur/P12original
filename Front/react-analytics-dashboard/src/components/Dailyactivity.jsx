import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  
  const data = [
    { day: 1, weight: 69, calories: 300 },
    { day: 2, weight: 70, calories: 320 },
    { day: 3, weight: 68, calories: 356 },
    { day: 4, weight: 69, calories: 300 },
    { day: 5, weight: 69, calories: 310 },
    { day: 6, weight: 69, calories: 315 },
    { day: 7, weight: 69, calories: 300 },
    { day: 8, weight: 70, calories: 360 },
    { day: 9, weight: 69, calories: 320 },
    { day: 10, weight: 69, calories: 340 },
  ];
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
          <p className="label">{`Day ${label}`}</p>
          <p className="intro">{`Weight: ${payload[0].value} kg`}</p>
          <p className="intro">{`Calories burned: ${payload[1].value} kcal`}</p>
        </div>
      );
    }
  
    return null;
  };
  
  export default function Dailyactivity(props){
    return (
      <div className="dailyactivity">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" orientation="left" stroke="#000000" domain={[69, 71]} />
              <YAxis yAxisId="right" orientation="right" stroke="#ff0000" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar yAxisId="left" dataKey="weight" fill="#000000" />
              <Bar yAxisId="right" dataKey="calories" fill="#ff0000" />
            </BarChart>
          </ResponsiveContainer>
      </div>
    );
  };
  




