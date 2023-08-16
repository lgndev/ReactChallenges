import Parent from "./components/Parent";
import Child from "./components/Child";
import Store from "./context/Store";
import { useState, useRef } from "react";

// list state up
// - if a parent is managing the state
// - you want to update state from a child
// - then you need to lift that state up throug children to parent

const LIST = [1, 2, 3, 4];

const App = () => {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue((prev) => {
      return prev + 1;
    });
  };

  const inputRef = useRef(null);

  return (
    <>
      <form
        onClick={(e) => {
          e.preventDefault();
          console.log("inputRef: ", inputRef.current.value);
          console.log("e: ", e.target.value);
        }}
      >
        <input ref={inputRef} />
        <button>test ref</button>
      </form>
      <Store.Provider value={[value, incrementValue]}>
        <Parent>
          <Child />
        </Parent>
      </Store.Provider>
    </>
  );
};

export default App;
