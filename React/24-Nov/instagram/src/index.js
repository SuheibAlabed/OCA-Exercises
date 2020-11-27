import React from "react";
import Header from "./Component/Header";
import ReactDOM from "react-dom";
import Body from "./Component/Body";
import Profile from "./Component/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
