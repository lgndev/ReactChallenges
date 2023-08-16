import { useContext } from "react";
import Store from "../context/Store";

const Child = ({ listItem }) => {
  // a stateful comoponet is a compoentn that manages a piece of state
  // useState hook to manage state inside compooennt
  // - compnent will render when state is updated
  const [value, incrementValue] = useContext(Store);
  return (
    <>
      <div>I am a child</div>
      <p>{value}</p>
      <p>{`list item ${listItem}`}</p>
      <button onClick={incrementValue}>inc</button>
    </>
  );
};

export default Child;
