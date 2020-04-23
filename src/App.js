import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

//Components
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

const Hats = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/shop' component={ ShopPage } />
        <Route exact path='/hats' component={ Hats } />
      </Switch>
    </div>
  );
}

export default App;
