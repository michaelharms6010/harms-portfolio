import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Welcome from "./components/Welcome";
import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init()

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Welcome} />
        <Route path="/bio" component={Bio} />
        <Route path="/products" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
