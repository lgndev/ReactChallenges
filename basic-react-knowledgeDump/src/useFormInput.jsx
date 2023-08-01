import React from "react";
import { useState } from "react";

const useFormInput = (initialValue, placeholder) => {
  console.log("here");
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, placeholder, onChange: handleChange };
};

export default useFormInput;
