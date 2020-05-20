import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./views/Signup/Index";
import Login from "./views/Login/Index";
import AppAuth from "./views/App/Index";
import EditOffice from './views/editView/Office';
import EditCP from './views/editView/CP';
import EditClient from './views/editView/Client';


import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={AppAuth} />
      <PrivateRoute path="/editOffice" component={EditOffice} />
      <PrivateRoute path="/editClient" component={EditClient} />
      <PrivateRoute path="/editCoworking-plan" component={EditCP} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;