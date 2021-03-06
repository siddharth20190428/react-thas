import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Profile from "./Profile";
import AuthContext from "./AuthContext";
import "./Website.css";

const Website = () => {
  return (
    <Router>
      <AuthContext>
        <div className="normal">
          <Header />
          <Switch>
            <Route path="/day24/about" component={About} />
            <Route path="/day24/profile" component={Profile} />
            <Route path="/day24/dashboard" component={Dashboard} />
            <Route exact path="/day24" component={Home} />
          </Switch>
        </div>
      </AuthContext>
    </Router>
  );
};

export default Website;
