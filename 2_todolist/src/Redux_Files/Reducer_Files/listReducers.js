import initialState from "../initialStates.json";

import * as actionTypes from "../actions";

const listReducer = (state = initialState, actionState) => {
  switch (actionState.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: actionState.payload.id,
            value: actionState.payload.value,
          },
        ],
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== actionState.payload.id),
      };
    case actionTypes.UPDATE_ITEM:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === actionState.payload.id
            ? { id: item.id, value: actionState.payload.newValue }
            : item
        ),
      };
    default:
      return state;
  }
};

export default listReducer;