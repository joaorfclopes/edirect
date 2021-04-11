import axios from "axios";

import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
} from "../constants/projectConstants";

export const listProjects = () => async (dispatch, getState) => {
  dispatch({ type: PROJECT_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get("/api/projects", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.message });
  }
};
