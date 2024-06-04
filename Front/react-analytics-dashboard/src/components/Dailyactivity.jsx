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
  
  const weights = data.map(item => item.weight);
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const median = weights.sort((a, b) => a - b)[Math.floor(weights.length / 2)];

 
  const formatTicks = (value) => {
    if (value === min || value === median || value === max) {
      return value;
    }
    return '';
  };





  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{display:'flex', 
        flexDirection:'column',
         gap:'20px',
          backgroundColor: '#ff0000',
          color:'#fff',
           padding: '20px 5px',
            border: '1px solid #ccc',position: 'relative',
            top: '-95px',

            }}>
          
          <p className="intro">{` ${payload[0].value} kg`}</p>
          <p className="intro">{`${payload[1].value} kcal`}</p>
        </div>
      );
    }
  
    return null;
  };

  const RoundedBar = (props) => {
   
  
    return <rect x={props.x} y={props.y} width={8} height={props.height} fill={props.fill} rx={5} ry={5} />;
  };
  

  
  export default function Dailyactivity(props){
    return (
      <div className="dailyactivity">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{
                top: 20, right: 30, left: 20, bottom: 0,
              }}bargap={10} barCategoryGap="30%"
            >
              <CartesianGrid border ="solid blue 1px" strokeDasharray="1 3" padding={{bottom:50}} />
              <XAxis dataKey="day" axisLine={false} margin={20}  tickLine ={false} tickMargin={20} height={80} padding={{top:20}}/>
              <YAxis yAxisId="right" orientation="left" stroke="transparent"  />
              <YAxis yAxisId="weight" orientation="right" stroke="#ff0000" domain={[min,max]} axisLine={false} tickLine={false} tickFormatter={formatTicks} tickMargin={20}  />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar yAxisId="weight" dataKey="weight" fill="#000000" shape={<RoundedBar />} />
              <Bar yAxisId="right" dataKey="calories" fill="#ff0000"  shape={<RoundedBar />}/>
            </BarChart>
          </ResponsiveContainer>
      </div>
    );
  };
  




