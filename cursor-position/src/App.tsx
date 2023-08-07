import "./App.css";
import { cursorStore } from "./store/cursorStore";
import { Square } from "./Square";
function App() {
  const positionArr = cursorStore((state) => state.positionArr);
  const setPosition = cursorStore((state) => state.setPosition);
  const removePosition = cursorStore((state) => state.removePosition);
  console.log(positionArr);

  return (
    <>
      <div
        className="App"
        style={{ cursor: "crosshair" }}
        onClick={(e) => {
          const x = e.clientX;
          const y = e.clientY;
          let match = -1;
          positionArr.find((position: { x: number; y: number }, i: number) => {
            if (position.x === x && position.y === y) {
              match = i;
              return true;
            }
          });

          if (match !== -1) {
            removePosition(match);
            match = -1;
          } else {
            setPosition(x, y);
          }
        }}
      >
        {positionArr.map((position: { x: number; y: number }, i: number) => {
          return (
            <Square
              key={Math.random() * 1000}
              x={position.x}
              y={position.y}
              i={i}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
