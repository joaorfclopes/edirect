import axios from "axios";

import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  TASK_TOGGLE_REQUEST,
  TASK_TOGGLE_SUCCESS,
  TASK_TOGGLE_FAIL,
  TASK_ADD_REQUEST,
  TASK_ADD_SUCCESS,
  TASK_ADD_FAIL,
  TASK_DELETE_REQUEST,
  TASK_DELETE_SUCCESS,
  TASK_DELETE_FAIL,
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
    dispatch({ type: PROJECT_CREATE_SUCCESS, payload: data });
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

export const updateProject = (project) => async (dispatch, getState) => {
  dispatch({ type: PROJECT_UPDATE_REQUEST, payload: project });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = axios.put(`/api/projects/${project._id}`, project, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: PROJECT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProject = (projectId) => async (dispatch, getState) => {
  dispatch({ type: PROJECT_DELETE_REQUEST, payload: projectId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    // eslint-disable-next-line no-unused-vars
    const { data } = axios.delete(`/api/projects/${projectId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: PROJECT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PROJECT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const toggleTask = (projectId, taskId) => async (dispatch, getState) => {
  dispatch({ type: TASK_TOGGLE_REQUEST });
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
    dispatch({ type: TASK_TOGGLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TASK_TOGGLE_FAIL, payload: error.message });
  }
};

export const addTask = (projectId, task) => async (dispatch, getState) => {
  dispatch({ type: TASK_ADD_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(
      `/api/projects/${projectId}/addTask`,
      task,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: TASK_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TASK_ADD_FAIL, payload: error.message });
  }
};

export const deleteTask = (projectId, taskId) => async (dispatch, getState) => {
  dispatch({ type: TASK_DELETE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(
      `/api/projects/${projectId}/deleteTask/${taskId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: TASK_DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TASK_DELETE_FAIL, payload: error.message });
  }
};
