import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



export default function App() {
  return (
    <div className="App">

<Router>

  <Header/>
  <Routes>
         <Route path="/user/:id" element={<Main/>} />
  </Routes>
    </Router>

    </div>
  );
}


