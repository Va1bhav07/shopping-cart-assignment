import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
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
        <PublicRoute exact path="/signin" component={Login} />
        <PublicRoute exact path="/register" component={SignUp} />
        <PublicRoute exact path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
