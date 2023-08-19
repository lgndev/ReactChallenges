import { useState } from "react";

const App = () => {
  const [value, setValue] = useState([1, 2, 3]);

  return (
    <>
      <div>
        {value.map((index) => {
          return <p>{index}</p>;
        })}
      </div>
    </>
  );
};

export default App;
