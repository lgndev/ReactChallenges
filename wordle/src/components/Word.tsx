import Letter from "./Letter";
import useWord from "../store/useWord";

const Word = ({ order }: { order: number }) => {
  const attempts = useWord((state) => state.attempts);

  return (
    <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
      <Letter letter={attempts[order][0]} char={0} order={order} />
      <Letter letter={attempts[order][1]} char={1} order={order} />
      <Letter letter={attempts[order][2]} char={2} order={order} />
      <Letter letter={attempts[order][3]} char={3} order={order} />
      <Letter letter={attempts[order][4]} char={4} order={order} />
    </div>
  );
};

export default Word;
