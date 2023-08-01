import React from "react";
import { useContext, useRef } from "react";
import AuthenticationContext from "./AuthenticationContext";
import { AUTHENTICATION_ACTION_TYPES } from "./AuthenticationReducer";
import useFormInput from "./useFormInput";

const Authentication = () => {
  const { state, dispatch } = useContext(AuthenticationContext);
  console.log("state: ", state);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const usernameInput = useFormInput("", "enter username");
  const passwordInput = useFormInput("", "enter password");

  const handleLogin = (e) => {
    dispatch({
      type: AUTHENTICATION_ACTION_TYPES.LOGGED_IN,
      payload: {
        id: 1,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      },
    });
  };

  const handleLogOut = (e) => {
    dispatch({
      type: AUTHENTICATION_ACTION_TYPES.LOGGED_OUT,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {state.loggedIn ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : (
        <>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
            {...usernameInput}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            ref={passwordRef}
            {...passwordInput}
          />
          <button onClick={handleLogin}>Log In</button>
        </>
      )}
    </form>
  );
};

export default Authentication;
