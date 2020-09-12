import React from 'react';
import './App.css';
import Home from './pages/home';
import Events from './pages/events';
import Places from './pages/places';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path={["/places/:city", "/places"]}>
            <Places />
          </Route>
          <Route path={["/events/:type", "/events"]}>
            <Events />
          </Route>
          <Route exact path={["/:page","/"]}>
            <Home />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
