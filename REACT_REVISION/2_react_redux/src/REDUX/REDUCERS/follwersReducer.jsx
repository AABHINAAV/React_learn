import { FETCH_FFLRS_FAIL, FETCH_FFLRS_REQ, FETCH_FFLRS_SUC } from "../actions";
import { initialState } from "../initialStateData";

export const followersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FFLRS_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FFLRS_SUC:
        console.log(action.payload)
      return {
        ...state,
        loading: false,
        followers_data: action.payload,
      };
    case FETCH_FFLRS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
