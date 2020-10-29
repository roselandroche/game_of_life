import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App className='main_app'/>
  </Router>,
  document.getElementById('root')
);