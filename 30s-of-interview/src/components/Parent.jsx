import { cloneElement, useContext, useState } from "react";
import Store from "../context/Store";
import React from "react";

const Parent = ({ children }) => {
  const [value] = useContext(Store);
  const [lifted, setLifted] = useState("from parent");
  return (
    <>
      <div>I am a parent</div>
      <p>{`this is the context value: ${value}`}</p>
      {children}
      <p>{`lifted: ${lifted}`}</p>
    </>
  );
};

export default Parent;
