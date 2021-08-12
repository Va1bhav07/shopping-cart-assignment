import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home";

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
  console.log("ok");
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
