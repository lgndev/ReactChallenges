import React from "react";
import { useRef } from "react";

const AddCustomer = ({ addCustomer }) => {
  const inputRef = useRef(null);
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        inputRef.current.value = null;
      }}
    >
      <input ref={inputRef} type="number" />
      <button
        onClick={() => {
          addCustomer(inputRef.current.value);
        }}
      >
        Checkout
      </button>
    </form>
  );
};

export default AddCustomer;
