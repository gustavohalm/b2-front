import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="b2-blue">
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
