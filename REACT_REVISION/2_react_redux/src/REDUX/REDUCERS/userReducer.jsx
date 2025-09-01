import { FETCH_FAIL, FETCH_REQ, FETCH_SUC } from "../actions";
import { initialState } from "../initialStateData";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUC:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
