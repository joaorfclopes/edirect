import axios from "axios";

import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  TOGGLE_TASK_REQUEST,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAIL,
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
  TASK_LIST_FAIL,
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

export const listTasks = (projectId) => async (dispatch, getState) => {
  dispatch({ type: TASK_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.get(`/api/projects/${projectId}/tasks`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: TASK_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TASK_LIST_FAIL, payload: error.message });
  }
};
