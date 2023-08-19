import { useState, useRef } from "react";

const App = () => {
  // build a stopwatch app
  // start | pause | reset buttons
  // display elapsed time in seconds
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  return (
    <>
      <div>{time}</div>
      <button
        onClick={() => {
          // clear prev interval
          clearInterval(intervalRef.current);

          // start counter
          const interval = setInterval(() => {
            setTime((prev) => {
              return prev + 1;
            });
          }, 1000);

          intervalRef.current = interval;
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          // pause counter
          // clear prev interval
          clearInterval(intervalRef.current);
        }}
      >
        pause
      </button>
      <button
        onClick={() => {
          // clear prev interval
          clearInterval(intervalRef.current);
          // reset counter
          setTime(0);
        }}
      >
        reset
      </button>
    </>
  );
};

export default App;
