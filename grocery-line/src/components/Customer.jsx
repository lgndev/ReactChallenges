import React from "react";
import useGroceryStore from "../store/useGroceryStore";

const Customer = ({ lineId, items }) => {
  return (
    <button
      style={{
        height: "100px",
        width: "100px",
        border: "2px solid black",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        removeItem(lineId);
      }}
    >
      <p># {lineId}</p>
      <p>{items}</p>
    </button>
  );
};

export default Customer;
