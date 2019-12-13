import React,{useState,useEffect} from "react";
import Nasa from "../src/components/nasa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <div><Nasa /></div>
    </div>
  );
}

export default App;
