import React from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Service from "./router/Service";
import Contact from "./router/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
