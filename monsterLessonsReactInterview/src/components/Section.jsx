import { useState } from "react";

const Section = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        style={{
          fontFamily: "'Roboto Mono', monospace",
          height: expanded ? "100%" : "auto",
          marginBottom: "10px",
          position: "relative",
          overflow: "auto",
        }}
      >
        <button
          style={{
            padding: "10px",
            border: "1px solid #dedede",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            backgroundColor: "#ffffff",
          }}
          onClick={(e) => {
            setExpanded((prev) => !prev);
          }}
        >
          <span className="material-symbols-outlined">
            {expanded ? "remove" : "add"}
          </span>
          {title}
        </button>
        <div
          style={{
            padding: "10px",
            backgroundColor: "#fafafa",
            display: expanded ? "block" : "none",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Section;
