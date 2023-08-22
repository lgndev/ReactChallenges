import { useState } from "react";

const Bullets = () => {
  const [responses, setResponses] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div style={{ marginBottom: "10px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setResponses((prev) => {
            return [...prev, inputValue];
          });

          setInputValue(() => {
            return "";
          });
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            style={{ width: "150px", marginBottom: "10px", fontSize: "12px" }}
          >
            response:{" "}
          </label>
          <input
            style={{ marginBottom: "10px", width: "150px" }}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
      </form>
      <div style={{ marginLeft: "10px" }}>
        <ul style={{ fontSize: "12px" }}>
          {responses.length > 0 &&
            responses.map((response, i) => {
              return <li key={i}>{` - ${response}`}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Bullets;
