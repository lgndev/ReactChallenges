const getDescription = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const res = await fetch(url);
  const json = res.json();
  return json;
};

export default getDescription;
