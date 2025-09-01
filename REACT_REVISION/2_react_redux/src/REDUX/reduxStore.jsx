import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./REDUCERS/rootReducer";

export const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
