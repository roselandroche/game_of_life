import React from 'react';

import About from './About';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conway's Game of Life!</h1>
        <About />
      </header>
    </div>
  );
}

export default App;
