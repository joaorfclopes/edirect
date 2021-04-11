import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";
import {
  projectListReducer,
  taskListReducer,
  toggleTaskReducer,
} from "./reducers/projectReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  projectList: projectListReducer,
  toggleTask: toggleTaskReducer,
  taskList: taskListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;