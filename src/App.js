import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/calculator">
          <div className="App">
            <Calculator />
          </div>
        </Route>

        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
