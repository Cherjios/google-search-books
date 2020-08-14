import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar"
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
   //Start adding elements here
   <div>
     <Navbar />
     <div className="col">
     <Jumbotron />
     </div>
   



   </div>
   

  );
}


export default App;
