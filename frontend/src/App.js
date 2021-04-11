import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Projects from "./views/Projects";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route path="/signin" render={(props) => <SignIn {...props} />} />
            <Route path="/signup" render={(props) => <SignUp {...props} />} />
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
