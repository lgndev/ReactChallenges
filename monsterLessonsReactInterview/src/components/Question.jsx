import { useState } from "react";

const Question = ({ prompt, children }) => {
  return (
    <div>
      <div
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: "600",
        }}
      >
        {prompt}
      </div>
      <div
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontWeight: "600",
          marginBottom: "10px",
        }}
      >
        {prompt && prompt.split("").map((char) => "=")}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Question;
