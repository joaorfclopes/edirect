import axios from "axios";

import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  TOGGLE_TASK_REQUEST,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
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

export const toggleTask = (projectId, taskId) => async (dispatch, getState) => {
  dispatch({ type: TOGGLE_TASK_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(
      `/api/projects/${projectId}/toggleTask/${taskId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: TOGGLE_TASK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TOGGLE_TASK_FAIL, payload: error.message });
  }
};

export const createProject = (project) => async (dispatch, getState) => {
  dispatch({ type: PROJECT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.post("/api/projects", project, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: PROJECT_CREATE_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({
      type: PROJECT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
