import { create } from "zustand";

export const usePokemonStore = create((set) => {
  return {
    pokemon: [],
    loading: false,
    error: "",
    getPokemon: async (id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

      try {
        set({ loading: true });

        const res = await fetch(url);
        const data = await res.json();
        set((state) => {
          return {
            loading: false,
            pokemon: [...state.pokemon, data.name],
          };
        });
      } catch (err) {
        set({ error: err.message, loading: false });
      }
    },
  };
});
