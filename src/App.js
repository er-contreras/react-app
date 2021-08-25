import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import { Route, Switch } from 'react-router-dom'; // eslint-disable-line
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const App = () => { // eslint-disable-line
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/Calculator">
          <div className="App">
            <Calculator />
          </div>
        </Route>

        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </>
  );
};

export default App;
