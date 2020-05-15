import { combineReducers } from "redux";
import usersReducers from "./userReducers";

export default combineReducers({
  users: usersReducers,
});
