import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import Item from '../../components/Item/Item';

class SelectedItems extends Component {
  render() {
    const renderItems = this.props.selectedItems.map((item, i) => {
      const left = i % 2 === 0;
      return (
        <Item
          clickItem={() => this.addItemToList(item)}
          photo={item}
          key={item.id}
          left={left} />
      );
    });

    return (
      <Layout routerProps={this.props}>
        <div>
          {renderItems}
        </div>
      </Layout>
    );
  };
};

const mapStateToProps = state => {
  return {
    selectedItems: state.addedItems,
  };
};

export default connect(mapStateToProps)(SelectedItems);
