import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

import { useAuth0 } from "@auth0/auth0-react";

const NavigationItems = (props) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/burger">Burger</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/" exact>
        Log Out
      </NavigationItem>
    </ul>
  ) : null;
};

export default NavigationItems;
