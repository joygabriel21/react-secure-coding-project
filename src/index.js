import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/private-route";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

const RootApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public */}
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<RootApp />, document.getElementById("root"));
