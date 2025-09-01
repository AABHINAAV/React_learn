import { combineReducers } from "redux";

import listReducer from "./listReducers";

const rootReducer = combineReducers({
  listItems: listReducer,
});

export default rootReducer;
