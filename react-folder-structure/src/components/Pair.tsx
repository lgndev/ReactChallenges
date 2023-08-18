import React from "react";
import { useState } from "react";

const Pair = ({ tree }) => {
  const [expanded, setExanded] = useState(false);
  const expand = tree.branch ? (expanded ? "-" : "+") : "*";
  return (
    <div className="pair" style={{ paddingLeft: "20px" }}>
      <div
        className="node"
        onClick={() => {
          if (tree.branch) {
            setExanded((prev) => {
              return !prev;
            });
          }
        }}
      >{`${expand} ${tree.node}`}</div>
      <div style={expanded ? { display: "block" } : { display: "None" }}>
        {tree.branch &&
          tree.branch.map((pair) => {
            return <Pair tree={pair} />;
          })}
      </div>
    </div>
  );
};

export default Pair;
