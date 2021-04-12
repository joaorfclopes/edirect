import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_RESET,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_RESET,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_RESET,
  TASK_TOGGLE_REQUEST,
  TASK_TOGGLE_SUCCESS,
  TASK_TOGGLE_FAIL,
  TASK_TOGGLE_RESET,
  TASK_ADD_REQUEST,
  TASK_ADD_SUCCESS,
  TASK_ADD_FAIL,
  TASK_ADD_RESET,
} from "../constants/projectConstants";

export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true };
    case PROJECT_LIST_SUCCESS:
      return { loading: false, projects: action.payload };
    case PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const projectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_REQUEST:
      return { loading: true };
    case PROJECT_CREATE_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case PROJECT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const projectUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return { loading: true };
    case PROJECT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const projectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DELETE_REQUEST:
      return { loading: true };
    case PROJECT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PROJECT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PROJECT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const taskToggleReducer = (state = {}, action) => {
  switch (action.type) {
    case TASK_TOGGLE_REQUEST:
      return { loading: true };
    case TASK_TOGGLE_SUCCESS:
      return { loading: false, success: true };
    case TASK_TOGGLE_FAIL:
      return { loading: false, error: action.payload };
    case TASK_TOGGLE_RESET:
      return {};
    default:
      return state;
  }
};

export const taskAddReducer = (state = {}, action) => {
  switch (action.type) {
    case TASK_ADD_REQUEST:
      return { loading: true };
    case TASK_ADD_SUCCESS:
      return { loading: false, success: true };
    case TASK_ADD_FAIL:
      return { loading: false, error: action.payload };
    case TASK_ADD_RESET:
      return {};
    default:
      return state;
  }
};
