import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Projects from "./views/Projects";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

function App() {
  const userInfo = localStorage.getItem("userInfo");

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route
              path="/signin"
              render={(props) => <SignIn {...props} userInfo={userInfo} />}
            />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/"
              render={(props) =>
                userInfo ? <Projects {...props} /> : <Redirect to="/signin" />
              }
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
