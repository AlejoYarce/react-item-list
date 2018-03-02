import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Toolbar.css';

class Toolbar extends Component {
  showAddedItems = () => {
    console.log(1);
  };

  render() {
    return (
      <header className='toolbar'>
        Photo List
        <button onClick={this.showAddedItems} className='cartButton'>{this.props.addedItemsCounter}</button>
      </header>
    );
  };
};

const mapStateToProps = state => {
  return {
    addedItemsCounter: state.addedItemsCounter
  };
};

export default connect(mapStateToProps)(Toolbar);
