import React, { useEffect, useCallback, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./hoc/Layout/Layout";
//import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import Auth from "./containers/Auth/Auth";
import * as actions from "./store/actions/index";

const Checkout = React.lazy(() => {
  return import("./containers/Checkout/Checkout");
});

const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});

const Burger = React.lazy(() => {
  return import("./containers/BurgerBuilder/BurgerBuilder");
});

const App = (props) => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const onTryAutoSignup = useCallback(
    () => dispatch(actions.authCheckState()),
    [dispatch]
  );

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/burger" render={(props) => <Burger {...props} />} />
      <Route path="/" exact component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={(props) => <Checkout {...props} />} />
        <Route path="/orders" render={(props) => <Orders {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/burger" render={(props) => <Burger {...props} />} />
        <Route path="/" exact component={Auth} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(App);
