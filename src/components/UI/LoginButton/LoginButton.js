import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import classes from "./LoginButton.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()} className={classes.Button}>
      Log In
    </button>
  );
};

export default LoginButton;
