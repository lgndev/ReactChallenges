import { useState } from "react";

const Answer = ({ solutions = [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        style={{
          marginBottom: "10px",
          padding: "5px",
          fontFamily: "'Roboto Mono', monospace",
          cursor: "pointer",
        }}
        onClick={(e) => {
          setExpanded((prev) => !prev);
        }}
      >
        Show Answers:{" "}
      </button>
      <ul
        style={{
          marginBottom: "10px",
          display: expanded ? "block" : "none",
          marginLeft: "10px",
          fontSize: "12px",
        }}
      >
        {solutions.length > 0 &&
          solutions.map((solution, i) => <li key={i}>{` - ${solution}`}</li>)}
      </ul>
    </div>
  );
};

export default Answer;
