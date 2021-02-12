import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Movies from './components/Movies';
import Comics from './components/Comics';
import Characters from './components/Characters';
import MovieTrailer from './components/MovieTrailer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/comics" component={Comics} />
          <Route path="/characters" component={Characters} />
          <Route path="/trailer" component={MovieTrailer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
