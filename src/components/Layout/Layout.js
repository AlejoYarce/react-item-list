import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <div className='mainContainer'>
          {this.props.children}
        </div>
      </Aux>
    );
  };
};

export default Layout;
