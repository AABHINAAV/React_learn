import * as actionTypes from "../actions";

// add item Action function
export const addItemActionFunc = (id, value) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: { id: id, value: value },
  };
};

//
//
//
//
// remove item Action function
export const removeItemActionFunc = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: { id: id },
  };
};

//
//
//
//
// update item Action function
export const updateItemActionFunc = (id, newValue) => {
  return {
    type: actionTypes.UPDATE_ITEM,
    payload: { id: id, newValue: newValue },
  };
};
