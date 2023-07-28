import "./App.css";
import { INITIAL_STATE, postReducer, POST_ACTION_TYPES } from "./postReducer";
import { useReducer } from "react";

function App() {
  // 1) Basic fetch to https://pokeapi.co/api/v2/pokemon/ditto
  // 2) State should be handled via useReducer
  // - {loading, error, post}

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const handleFetch = async () => {
    dispatch({ type: POST_ACTION_TYPES.FETCH_START });
    try {
      const url = "https://pokeapi.co/api/v2/pokemon/ditto";
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Invalid Pokemon");
      }
      const data = await res.json();
      dispatch({ type: POST_ACTION_TYPES.FETCH_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: POST_ACTION_TYPES.FETCH_ERROR, payload: err.message });
    }
  };

  return (
    <>
      <button onClick={handleFetch}>Fetch Pokemon</button>
      <p>
        {state.loading
          ? "...fetching"
          : state.error
          ? state.error
          : state.post.name
          ? state.post.name
          : "fetch"}
      </p>
    </>
  );
}

export default App;
