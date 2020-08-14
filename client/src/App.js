import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar"
import Jumbotron from "./components/Jumbotron";
import FormSearchBook from "./components/Form"
import ResultCard from "./components/ResultCard"

function App() {
  return (
   //Start adding elements here
   <div>
     <Navbar />
     <div className="container">
     <Jumbotron />
     <FormSearchBook />
     <br />
       <h2>Results!</h2>
       <div>
         <ResultCard />
       </div>


     </div>
     
     
   



   </div>
   

  );
}


export default App;
