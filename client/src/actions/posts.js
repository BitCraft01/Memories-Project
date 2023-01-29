import * as api from "../api";

//Action Creators
const getPosts = () => async (dispatch) => {
  const action = { type: "FETCH_ALL", payload: [] };

  dispatch(action);
};
