import React, { Component } from "react";
import "./style.css";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import details from "./details.js";
import home from "./home.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>

        <Switch>
          <Route path="/detail/:id" component={details} />
           
         
          <Route exact path="/" component={home} />
           
        </Switch>
      </div>
    );
  }
}
