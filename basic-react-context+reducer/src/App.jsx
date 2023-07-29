import "./App.css";
import Home from "./Home";
import About from "./About";
import { UserContext } from "./UserContext";
import { userReducer } from "./UserReducer";
import { useReducer, useMemo } from "react";

function App() {
  const [state, dispatch] = useReducer(userReducer, null);
  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);
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
