import React from 'react';
import About from './About';
import Home from './Home';
import '../css/App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </header>
    </div>
  );
}

export default App;
