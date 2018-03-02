import React, { Component } from 'react';

import { connect } from 'react-redux';
import axios from '../../axios';
import Item from '../../components/Item/Item';
import Spinner from '../../components/Spinner/Spinner';

class ItemList extends Component {
  componentDidMount() {
    axios.get('/photos')
      .then(response => {
        const { data } = response;
        const slicedData = data.slice(0, 50);
        this.props.setItemList(slicedData);
      })
      .catch(error => console.log(error));
  };

  addItemToList = (item) => {
    this.props.onAddItem(item);
  };

  render() {
    let renderItems = <Spinner />;
    if (this.props.items) {
      renderItems = this.props.items.map((item, i) => {
        const left = i % 2 === 0;
        return (
          <Item
            clickItem={() => this.addItemToList(item)}
            photo={item}
            key={item.id}
            left={left} />
        );
      });
    }
    return (
      <div>
        {renderItems}
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    items: state.items,
    addedItems: state.addedItems,
    addedCounter: state.addedCounter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setItemList: (itemList) => dispatch({ type: 'SET_ITEM_LIST', itemList }),
    onAddItem: (item) => dispatch({ type: 'ADD_ITEM', item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
