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


  
  export default function Dailyactivity(props){

  
    console.log("Props",props.activity)



    const data= props.activity
  

    
    const kilograms = data.map(item => item.kilogram);
    const min = Math.min(...kilograms);
    const max = Math.max(...kilograms);
    const median = kilograms.sort((a, b) => a - b)[Math.floor(kilograms.length / 2)];
  
   
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
              <XAxis dataKey="ind" axisLine={false} margin={20}  tickLine ={false} tickMargin={20} height={80} padding={{top:20}}/>
              <YAxis yAxisId="right" orientation="left" stroke="transparent"  />
              <YAxis yAxisId="kilogram" orientation="right" stroke="#ff0000" domain={[min,max]} axisLine={false} tickLine={false} tickFormatter={formatTicks} tickMargin={20}  />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar yAxisId="kilogram" dataKey="kilogram" fill="#000000" shape={<RoundedBar />} />
              <Bar yAxisId="right" dataKey="calories" fill="#ff0000"  shape={<RoundedBar />}/>
            </BarChart>
          </ResponsiveContainer>
      </div>
    );
  };
  




