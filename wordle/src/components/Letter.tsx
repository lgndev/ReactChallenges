import useWord from "../store/useWord";

const Letter = ({
  letter,
  char,
  order,
}: {
  letter: string;
  char: number;
  order: number;
}) => {
  const word = useWord((state) => state.word);
  const round = useWord((state) => state.round);

  return (
    <>
      {letter && round !== order ? (
        word[char] === letter.toUpperCase() ? (
          <div
            style={{
              height: "52px",
              width: "52px",
              border: "2px solid #6aaa64",
              backgroundColor: "#6aaa64",
              fontSize: "32px",
              fontFamily: "'Roboto Mono', monospace",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            {letter}
          </div>
        ) : word.includes(letter.toUpperCase()) ? (
          <div
            style={{
              height: "52px",
              width: "52px",
              border: "2px solid #c9b458",
              backgroundColor: "#c9b458",
              fontSize: "32px",
              fontFamily: "'Roboto Mono', monospace",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            {letter}
          </div>
        ) : (
          <div
            style={{
              height: "52px",
              width: "52px",
              border: "2px solid #787c7e",
              backgroundColor: "#787c7e",
              fontSize: "32px",
              fontFamily: "'Roboto Mono', monospace",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            {letter}
          </div>
        )
      ) : (
        <div
          style={{
            height: "52px",
            width: "52px",
            border: "2px solid #d3d6da",
            backgroundColor: "#ffffff",
            fontSize: "32px",
            fontFamily: "'Roboto Mono', monospace",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "uppercase",
          }}
        >
          {letter}
        </div>
      )}
    </>
  );
};

export default Letter;
