import React from "react";
import { Route,Routes} from 'react-router-dom';
import Home from "./Components/Home"
import About from "./Components/About";
import Login from "./Components/Login";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    
    </div>
  );
}

export default App;