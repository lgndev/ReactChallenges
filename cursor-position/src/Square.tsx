import { cursorStore } from "./store/cursorStore";

export const Square = ({ x, y, i }: { x: number; y: number; i: number }) => {
  const removePosition = cursorStore((state) => state.removePosition);
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        color: "red",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "crosshair",
        height: "20px",
        width: "20px",
        backgroundColor: "red",
      }}
      onClick={(e) => {
        e.stopPropagation();
        removePosition(i);
      }}
    ></div>
  );
};
