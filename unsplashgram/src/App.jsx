import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from './components/Nav';
import { Auth } from './components/Auth';
import { Photos } from './components/Photos';

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Nav />

        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          {/* <Route path="/page/:id">
            <Photo />
          </Route> */}
          <Route path="/">
            <Photos />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
