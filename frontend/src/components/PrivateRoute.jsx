import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const userInfo = localStorage.getItem("userInfo");

  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin" />
        )
      }
    ></Route>
  );
}
