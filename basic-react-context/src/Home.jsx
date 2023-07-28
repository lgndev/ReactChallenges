import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { login } from "./login";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <p>Home</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
