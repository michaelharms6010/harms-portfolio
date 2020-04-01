import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Bio from "./components/Bio";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/bio" component={Bio} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
