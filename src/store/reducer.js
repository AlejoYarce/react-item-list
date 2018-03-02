const initialState = {
  items: [],
  addedItems: [],
  addedItemsCounter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEM_LIST':
      return {
        ...state,
        items: action.itemList,
      }
    case 'ADD_ITEM':
      const { addedItems } = { ...state };
      addedItems.push(action.item);
      return {
        ...state,
        addedItems,
        addedItemsCounter: addedItems.length,
      }
  }
  return state;
};

export default reducer;
