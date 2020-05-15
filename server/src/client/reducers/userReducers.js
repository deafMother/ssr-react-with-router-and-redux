import { FET_USERS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FET_USERS:
      return action.payload.data;

    default:
      return state;
  }
};
