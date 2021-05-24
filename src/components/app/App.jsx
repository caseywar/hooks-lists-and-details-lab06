import React from 'react';
// import AnimalCrossing from '../../containers/AnimalCrossing';
import VillagerList from '../villagers/VillagerList'
import DetailsContainer from '../../containers/DetailsContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

export default function App() {
  return (
    <div>
    <Router>
      <Link to="/">Home Page</Link>
      <Switch>
        <Route exact path="/" component={VillagerList} />
        <Route exact path="/villagers/:id" component={DetailsContainer} />
      </Switch>
    </Router>
    </div>
  )
}