import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  TOGGLE_TASK_REQUEST,
  TOGGLE_TASK_SUCCESS,
  TOGGLE_TASK_FAIL,
  TOGGLE_TASK_RESET,
  TASK_LIST_REQUEST,
  TASK_LIST_SUCCESS,
  TASK_LIST_FAIL,
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

export const taskListReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case TASK_LIST_REQUEST:
      return { loading: true };
    case TASK_LIST_SUCCESS:
      return { loading: false, tasks: action.payload };
    case TASK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
