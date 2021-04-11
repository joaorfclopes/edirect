import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  TOGGLE_TASK_REQUEST,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAIL,
  TOGGLE_TASK_RESET,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_RESET,
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

export const toggleTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_TASK_REQUEST:
      return { loading: true };
    case TOGGLE_TASK_SUCCESS:
      return { loading: false, success: true };
    case TOGGLE_TASK_FAIL:
      return { loading: false, error: action.payload };
    case TOGGLE_TASK_RESET:
      return {};
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
