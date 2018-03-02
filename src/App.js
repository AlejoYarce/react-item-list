import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import ItemList from './pages/ItemList/ItemList';

class App extends Component {
  render() {
    return (
      <Layout>
        <ItemList />
      </Layout>
    );
  }
}

export default App;
