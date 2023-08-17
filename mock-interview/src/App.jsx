import getPokemon from "./util/getPokemon";
import getDescription from "./util/getDescription";
import { useState, useEffect } from "react";

const App = () => {
  // select that contains all original 150 pokemon
  // - https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150
  // card that displays an image, name and breif desc of the active pokemon
  // prev / next button which makes the prev / next pokemon active

  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(-1);
  const [description, setDescription] = useState({});

  useEffect(() => {
    getPokemon().then((res) => {
      setPokemon(res.results);
    });
    setSelectedPokemon(0);
    getDescription(1).then((res) => {
      setDescription({
        name: res.name,
        image: res.sprites.front_default,
        order: res.order,
      });
    });
  }, []);

  const handleSelectPokemon = (e) => {
    setSelectedPokemon(e.target.value);
    getDescription(e.target.value).then((res) => {
      setDescription({
        name: res.name,
        image: res.sprites.front_default,
        order: res.order,
      });
    });
  };

  const handlePrev = () => {
    setSelectedPokemon(selectedPokemon - 1);
    getDescription(selectedPokemon - 1).then((res) => {
      setDescription({
        name: res.name,
        image: res.sprites.front_default,
        order: res.order,
      });
    });
  };

  const handleNext = () => {
    setSelectedPokemon(selectedPokemon + 1);
    getDescription(selectedPokemon + 1).then((res) => {
      setDescription({
        name: res.name,
        image: res.sprites.front_default,
        order: res.order,
      });
    });
  };

  return (
    <>
      <select
        onChange={(e) => {
          handleSelectPokemon(e);
        }}
        value={selectedPokemon}
      >
        {pokemon.map((index, i) => {
          return (
            <option key={i} value={i + 1}>
              {index.name}
            </option>
          );
        })}
      </select>
      <div>
        <p>{description.name}</p>
        <img src={description.image} />
        <p>{description.order}</p>
      </div>
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
    </>
  );
};

export default App;
