import axios from "axios";

export const FET_USERS = "fetch_users";

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get("https://react-ssr-api.herokuapp.com/users");

  dispatch({
    type: FET_USERS,
    payload: res,
  });
};
