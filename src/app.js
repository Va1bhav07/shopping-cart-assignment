import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/login";
import SignUp from "./Pages/SignUp";

const PublicRoute = ({ component: Component, ...params }) => {
  return (
    <Route
      {...params}
      render={(params) => (
        <Layout>
          <Component {...params} />
        </Layout>
      )}
    />
  );
};

const PrivateRoute = () => {};

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
