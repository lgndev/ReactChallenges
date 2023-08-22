import { create } from "zustand";

const useZustand = create((set) => ({
  bears: 0,
}));

export default useZustand;
