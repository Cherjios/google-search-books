import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar"
import Jumbotron from "./components/Jumbotron";
import FormSearchBook from "./components/Form"

function App() {
  return (
   //Start adding elements here
   <div>
     <Navbar />
     <div className="col">
     <Jumbotron />
     <FormSearchBook />
     </div>
   



   </div>
   

  );
}


export default App;
