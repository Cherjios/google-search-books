import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/search"



function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Jumbotron />
      <Route exact path="/" component={Search} />



      </div>
    </Router>

  );
}

export default App;
