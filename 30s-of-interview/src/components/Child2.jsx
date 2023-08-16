const Child2 = ({ setLifted }) => {
  return (
    <button
      onClick={() => {
        setLifted("from child2");
      }}
    >
      Child2
    </button>
  );
};

export default Child2;
