import { useCounter } from "./store/useCounter";

const App = () => {
  const capture = useCounter((state) => state.capture);
  const error = useCounter((state) => state.error);
  const setCapture = useCounter((state) => state.setCapture);
  const onBlur = useCounter((state) => state.onBlur);
  const onClick = useCounter((state) => state.onClick);
  const onReset = useCounter((state) => state.onReset);

  return (
    <>
      <button onClick={onReset}>reset</button>
      <div>
        <button
          onClick={() => {
            onClick(-1);
          }}
        >
          -
        </button>
        <input
          value={capture}
          type="text"
          onChange={(e) => {
            setCapture(e.target.value);
          }}
          onBlur={onBlur}
        />
        <button
          onClick={() => {
            onClick(1);
          }}
        >
          +
        </button>
      </div>
      <p>{error}</p>
    </>
  );
};

export default App;
