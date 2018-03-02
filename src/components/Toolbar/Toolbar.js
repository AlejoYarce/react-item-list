import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import './Toolbar.css';

class Toolbar extends Component {
  goBack = () => {
    this.props.routerProps.history.push("/");
  };

  showAddedItems = () => {
    this.props.routerProps.history.push("/selected-items");
  };

  render() {
    return (
      <header className='toolbar'>
        <button onClick={this.goBack} className='backButton'>
          Back
        </button>      
        Item List
        <button onClick={this.showAddedItems} className='cartButton'>
          {this.props.addedItemsCounter}
        </button>
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
