import "./App.css";
import { UserContext } from "./UserContext";
import Home from "./Home";
import About from "./About";
import { useState, useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user, setUser]);
  return (
    <>
      <UserContext.Provider value={value}>
        <Home />
        <About />
      </UserContext.Provider>
    </>
  );
}

export default App;
