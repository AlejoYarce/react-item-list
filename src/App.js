import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ItemList from './pages/ItemList/ItemList';
import SelectedItems from './pages/SelectedItems/SelectedItems';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={ItemList} />
        <Route path='/selected-items' component={SelectedItems} />
      </Switch>
    );
  }
}

export default App;
