import { Route, Router, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Riddle from "./components/riddle/riddle";
import Riddle2 from "./components/riddle2/riddle2";
import Home from "./components/home/Home";
function App() {


  
  return (
    // <Router>

      
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/riddle" element={<Riddle/>} />
    //     <Route path="/riddle2" element={<Riddle2/>} />
        
    //   </Routes>
    //  </Router>

    <>
      <Riddle2/>
    </>

  );
}

export default App;
