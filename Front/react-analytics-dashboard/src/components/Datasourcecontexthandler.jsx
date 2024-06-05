import MockDataContext from '..api/MockDataContext';
import { useState } from 'react';


export default function Contextchanger() {
    const [useMockData, setUseMockData] = useState(false);
  
    return (
      <MockDataContext.Provider value={{ useMockData, setUseMockData }}>
       
      </MockDataContext.Provider>
    );
  }