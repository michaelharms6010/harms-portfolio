import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/bio" />
        <Route path="/projects" />
        <Route path="/contact" />
      </div>
    </Router>
  );
}

export default App;
