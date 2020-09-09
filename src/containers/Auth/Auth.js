import React from "react";
import classes from "./Auth.module.css";
import LoginButton from "../../components/UI/LoginButton/LoginButton";
import LogoutButton from "../../components/UI/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = (props) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={classes.Auth}>
      {isAuthenticated ? (
        <>
          <h1>Log Out</h1>
          <LogoutButton />
        </>
      ) : (
        <>
          <h1>Log In to order your Burger!</h1>
          <LoginButton />
        </>
      )}
    </div>
  );
};

export default Auth;
