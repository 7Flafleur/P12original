import Header from "./Header";
import IdPlease from "./Useridplease"; 
import Main from "./Main";
import Errrorpage from "./Errorpage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



export default function App() {
  return (
    <div className="App">

      <Router>

       
        <Routes>
          <Route path="/" element={<IdPlease/>}/>
          <Route path="/user/:id" element={<Main />} />
          <Route path="*" element={<Errrorpage />} />
        </Routes>
      </Router>

    </div>
  );
}


