import MockDataContext from '..api/MockDataContext';
import Contextchanger from './Datasourcecontexthandler';
import Main from "./Main";
import Errrorpage from "./Errorpage"
import { BrowserRouter as Router, Route, Routes, useState } from 'react-router-dom';



export default function App() {


  const [useMockData, setUseMockData] = useState(false);




  return (

    <Contextchanger className="App" value={{ useMockData, setUseMockData }}>


    <div className="App">

      <Router>

       
        <Routes>
          <Route path="/" element={<Errrorpage/>}/>
          <Route path="/user/:id" element={<Main />} />
          <Route path="*" element={<Errrorpage />} />
        </Routes>
      </Router>

    </div>

    </Contextchanger>

  );
}


