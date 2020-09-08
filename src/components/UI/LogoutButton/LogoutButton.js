import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./LogoutButton.module.css";

const LoginButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout()} className={classes.Button}>
      Log Out
    </button>
  );
};

export default LoginButton;
