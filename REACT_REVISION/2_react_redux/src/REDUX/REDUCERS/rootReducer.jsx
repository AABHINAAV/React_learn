import { combineReducers } from "redux";
import { followersReducer } from "./follwersReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  followers: followersReducer,
});
