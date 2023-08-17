const getPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
export default getPokemon;
