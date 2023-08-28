import { useState } from "react";

// Coding challenge colors:
// Yellow click button background: #ffbb48
// Black bkgd #000000
// Error text color: #f61c25

const App = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");

  //  decrement
  const handleDec = () => {
    setError("");
    // no - numbers
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    } else {
      setError("no negative number");
    }
  };

  // increment
  const handleIncremnet = () => {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
      setError("");
    } else {
      setError("can only go up to 10");
    }
  };

  // reset
  const handleReset = () => {
    setCounter(0);
    setError("");
  };

  return (
    <>
      <div className="h-screen w-screen bg-black flex justify-center items-center">
        <div className="w-[400px] bg-white p-[25px]">
          <div className="mb-[20px] flex justify-center">
            <button
              className="uppercase bg-transparent border-0 text-[orange] text-[18px] cursor-pointer"
              onClick={() => {
                handleReset();
              }}
            >
              reset
            </button>
          </div>
          <div className="flex justify-evenly items-center mb-[20px]">
            <button
              onClick={() => {
                handleDec();
              }}
              className="uppercase bg-[#ffbb48] border-0 text-black h-[40px] w-[40px] rounded-[50%] text-[30px] curspor-pointer flex justify-center items-center"
            >
              -
            </button>

            <input
              type="number"
              value={counter}
              className="border-2 border-black"
              onChange={(e) => {
                setCounter(e.target.value);
              }}
              onBlur={(e) => {
                if (Number(e.target.value) > 10) {
                  setCounter(Number(10));
                  setError("can only go up to 10");
                } else if (Number(e.target.value) < 0) {
                  setCounter(Number(0));
                  setError("no negative number");
                } else {
                  setError("");
                  setCounter(Number(e.target.value));
                }
              }}
            />

            <button
              onClick={() => {
                handleIncremnet();
              }}
              className="uppercase bg-[#ffbb48] border-0 text-black h-[40px] w-[40px] rounded-[50%] text-[30px] curspor-pointer flex justify-center items-center"
            >
              +
            </button>
          </div>
          <p className="text-[#f61c25] text-center text-[18px] h-[18px]">
            {error}
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
