import React from "react";
import { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";
import useFormInput from "./useFormInput";

const Pokemon = () => {
  const { state } = useContext(AuthenticationContext);

  const pokemon = useFormInput("", "enter name of pokemon");

  return (
    <>
      {state.loggedIn ? (
        <ul>
          <li>id: {state.user.id}</li>
          <li>username: {state.user.username}</li>
          <li>password: {state.user.password}</li>
          <input type="text" {...pokemon} />
        </ul>
      ) : (
        <p>Please login to search for pokemon</p>
      )}
    </>
  );
};

export default Pokemon;
