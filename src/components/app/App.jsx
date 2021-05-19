import React from 'react';
import AnimalCrossing from '../../containers/AnimalCrossing';
import DetailsContainer from '../../containers/DetailsContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={AnimalCrossing} />
        <Route exact path="/villagers/:id" component={DetailsContainer} />
      </Switch>
    </Router>
    </div>
  )
}