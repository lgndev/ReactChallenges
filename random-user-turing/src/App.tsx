import useRandomUser from "./hooks/useRandomUser";

const App = () => {
  const [userList, current, next, previous] = useRandomUser(
    "https://randomuser.me/api/"
  );

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "50%" }}>
          {current && (
            <>
              <p>{current.name.first}</p>
              <p>{current.name.last}</p>
              <p>{current.name.gender}</p>
            </>
          )}
        </div>
        <div style={{ flexBasis: "50%" }}>
          {userList.map((user) => {
            return (
              <div style={{ border: "1px solid red" }}>
                <p>{user.name.first}</p>
                <p>{user.name.last}</p>
                <p>{user.name.gender}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default App;
