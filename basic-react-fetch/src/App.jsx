import "./App.css";
import { useState, useEffect } from "react";

// 1) Fetch data from the following endpoint: https://pokeapi.co/api/v2/pokemon/${id}
// 2) Enter the id (name) of the pokemon in an input and fetch data for that pokemon
// 3) When an error is thrown, alert the user
// 4) Keep a running list of successful fetches on the page
// 5) Disable the input during a fetch or an alert

function App() {
  const [pokemon, setPokemon] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = async (pokemon) => {
    try {
      setDisabled(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      if (!res.ok || !pokemon) {
        throw new Error("Pokemon not found, please try again.");
      } else {
        setDisabled(false);
        const json = await res.json();
        setPokemonData((prev) => {
          return [...prev, { name: json.name, order: json.order }];
        });
      }
    } catch (err) {
      setDisabled(false);
      alert(err.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getPokemon(pokemon);
  };

  const onChange = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          value={pokemon}
          placeholder="Enter your favorite pokemon"
          onChange={onChange}
          disabled={disabled}
        />
      </form>

      {pokemonData.length <= 0 ? (
        <p>Please search for a pokemon above</p>
      ) : (
        pokemonData.map((individualData) => {
          return (
            <div>
              <p>{individualData.name}</p>
              <p>{individualData.order}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
