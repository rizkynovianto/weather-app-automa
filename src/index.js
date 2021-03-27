import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from './layouts/Main.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <MainLayout />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

