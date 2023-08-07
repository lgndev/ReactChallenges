import { create } from "zustand";

interface TCursorStore {
  positionArr: { x: number; y: number }[];
  removePosition: (index: number) => void;
  setPosition: (x: number, y: number) => void;
}

export const cursorStore = create<TCursorStore>()((set) => ({
  positionArr: [],
  removePosition: (index: number) => {
    set((state) => {
      let newPositionArr = state.positionArr.concat();
      newPositionArr.splice(index, 1);
      return { positionArr: [...newPositionArr] };
    });
  },
  setPosition: (x: number, y: number) => {
    set((state) => {
      return {
        positionArr: [...state.positionArr, { x, y }],
      };
    });
  },
}));
