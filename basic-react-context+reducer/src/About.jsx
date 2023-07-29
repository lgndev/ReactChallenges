import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const About = () => {
  const { state } = useContext(UserContext);
  return (
    <div>
      <p>About</p>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default About;
