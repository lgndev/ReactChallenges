import Word from "./components/Word";
import useWord from "./store/useWord";
import { useEffect } from "react";

const App = () => {
  const word = useWord((state) => state.word);
  const setWord = useWord((state) => state.setWord);
  const setCurrentGuess = useWord((state) => state.setCurrentGuess);
  const resetCurrentGuess = useWord((state) => state.resetCurrentGuess);
  const incrementRound = useWord((state) => state.incrementRound);

  useEffect(() => {
    setWord();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
      onKeyDown={(e) => {
        //..
        setCurrentGuess(e);
      }}
      tabIndex={0}
    >
      <p
        style={{
          textTransform: "uppercase",
          fontSize: "32px",
          fontFamily: "'Roboto Mono', monospace",
        }}
      >
        {/* {word} */}
      </p>
      <Word order={0} />
      <Word order={1} />
      <Word order={2} />
      <Word order={3} />
      <Word order={4} />
      <Word order={5} />
      <button
        onClick={resetCurrentGuess}
        style={{ marginTop: "5px", cursor: "pointer" }}
      >
        Reset Current Guess
      </button>
      <button
        onClick={incrementRound}
        style={{ marginTop: "5px", cursor: "pointer" }}
      >
        Submit Guess
      </button>
    </div>
  );
};

export default App;
