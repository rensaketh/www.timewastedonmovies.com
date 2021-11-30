import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home.component';


function App() {

  
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
