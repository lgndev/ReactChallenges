import { usePokemonStore } from "../Store/pokemonStore";
import { useRef } from "react";

function App() {
  const pokemon = usePokemonStore((state) => {
    return state.pokemon;
  });
  const loading = usePokemonStore((state) => state.loading);
  const error = usePokemonStore((state) => state.error);
  const getPokemon = usePokemonStore((state) => state.getPokemon);
  const inputRef = useRef(null);

  return (
    <>
      <ul>
        {pokemon.length > 0 ? (
          pokemon.map((pokemon) => {
            return <li>{pokemon}</li>;
          })
        ) : (
          <li>Search for a pokemon</li>
        )}
      </ul>
      <p>{loading ? "loading" : "done loading"}</p>
      <p>{error ? error : "no errors"}</p>
      <button
        onClick={() => {
          getPokemon(inputRef.current.value);
        }}
      >
        Get pokemon
      </button>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" name="" id="" ref={inputRef} />
      </form>
    </>
  );
}

export default App;
