import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import { Route, Switch } from 'react-router-dom'; // eslint-disable-line
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => { // eslint-disable-line
  return (
    <>
      <Route exact path="/">
        <div className="App">
          <Calculator />
        </div>
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </>
  );
};

export default App;
