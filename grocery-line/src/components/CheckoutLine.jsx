import React from "react";
import { useEffect } from "react";
import useGroceryStore from "../store/useGroceryStore";

const CheckoutLine = ({ line, children }) => {
  const removeItem = useGroceryStore((state) => state.removeItem);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      removeItem(line.id);
    }, 1000);

    return () => {
      console.log("remove interval");
      clearInterval(intervalId);
    };
  }, [line.currentItems]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "2px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p># {line.id}</p>
          <p>max: {line.maxItems}</p>
          <p>current: {line.currentItems}</p>
        </div>
        {children}
      </div>
    </>
  );
};

export default CheckoutLine;
