import React from "react";
import { USER_ACTION_TYPES } from "./UserReducer";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Home = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
      <p>Home</p>
      <p>{JSON.stringify(state)}</p>
      {state ? (
        <button
          onClick={() => {
            dispatch({ type: USER_ACTION_TYPES.USER_LOGOUT });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({ type: USER_ACTION_TYPES.USER_LOGIN });
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
