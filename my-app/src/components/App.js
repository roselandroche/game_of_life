import React from 'react';
import About from './About';
import Home from './Home';
import Grid from './Grid';
import '../css/App.css';
import '../css/Home.css'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/' component={Grid} />
    </div>
  );
}

export default App;
