import "./App.css";
import { useState } from "react";

// 1) render a count to the DOM
// 2) click a button to increment this count
// 3) add another button that implements the provided util
// -- this util will update that count some time in the future

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment Count</button>
    </>
  );
}

export default App;
