import { useState } from "react";

const values = [
  {
    value: 1,
    matched: false,
    pending: false,
    id: 1,
  },

  {
    value: 2,
    matched: false,
    pending: false,
    id: 3,
  },
  {
    value: 1,
    matched: false,
    pending: false,
    id: 2,
  },
  {
    value: 2,
    matched: false,
    pending: false,
    id: 4,
  },
  {
    value: 4,
    matched: false,
    pending: false,
    id: 8,
  },
  {
    value: 3,
    matched: false,
    pending: false,
    id: 6,
  },
  {
    value: 4,
    matched: false,
    pending: false,
    id: 7,
  },

  {
    value: 5,
    matched: false,
    pending: false,
    id: 9,
  },
  {
    value: 3,
    matched: false,
    pending: false,
    id: 5,
  },
];

const App = () => {
  const [guess, setGuess] = useState(null);
  const [data, setData] = useState(values);

  const getIndex = (id) => {
    const dataCpy = [...data];
    return dataCpy.findIndex((symbol) => symbol.id === id);
  };

  const buttonHandler = ({ value, matched, id }) => {
    return () => {
      if (guess === null) {
        // new guess
        setGuess({ value, matched, id });
        // update pending status
        const passedIndex = getIndex(id);
        setData((prev) => {
          const prevCpy = [...prev];
          prevCpy[passedIndex] = {
            ...prevCpy[passedIndex],
            pending: true,
          };
          return prevCpy;
        });
      } else if (value === guess.value && id !== guess.id) {
        // second guess matches
        // - update data array
        const guessIndex = getIndex(guess.id);
        const passedIndex = getIndex(id);

        setData((prev) => {
          const prevCpy = [...prev];
          prevCpy[guessIndex] = {
            value: guess.value,
            matched: true,
            id: guess.id,
          };
          return prevCpy;
        });

        setData((prev) => {
          const prevCpy = [...prev];
          prevCpy[passedIndex] = {
            value: value,
            matched: true,
            id: id,
          };
          return prevCpy;
        });
        // - reset guess state
        setGuess(null);
      } else {
        // no match
        // - reset guess state
        setGuess(null);
        // - reset pending state
        const guessIndex = getIndex(guess.id);
        const passedIndex = getIndex(id);

        setData((prev) => {
          const prevCpy = [...prev];
          prevCpy[guessIndex] = {
            ...prevCpy[guessIndex],
            pending: false,
          };
          return prevCpy;
        });

        setData((prev) => {
          const prevCpy = [...prev];
          prevCpy[passedIndex] = {
            ...prevCpy[passedIndex],
            pending: false,
          };
          return prevCpy;
        });
        // - reset guess state
        setGuess(null);
      }
    };
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",

          gridTemplateRows: "50px 50px  50px",
          gridTemplateColumns: "50px 50px  50px ",
          gap: "10px",
        }}
      >
        {data.map((symbol) => {
          return (
            <button
              style={{
                cursor: "pointer",
                color: symbol.matched
                  ? "green"
                  : symbol.pending
                  ? "black"
                  : "transparent",
              }}
              onClick={buttonHandler(symbol)}
            >
              {symbol.value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
