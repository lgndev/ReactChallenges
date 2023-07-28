import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <p>Home</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default About;
