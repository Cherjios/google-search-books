import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";



function App() {
  return (
    <Router>
      <Navbar />
      <Jumbotron />



    </Router>

  );
}

export default App;
