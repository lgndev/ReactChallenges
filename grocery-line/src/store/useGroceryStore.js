import { create } from "zustand";

const useGroceryStore = create((set, get) => ({
  lines: [
    {
      id: 1,
      maxItems: 25,
      currentItems: 5,
      customers: [{ items: 5 }],
    },
    {
      id: 2,
      maxItems: 30,
      currentItems: 0,
      customers: [],
    },
    {
      id: 3,
      maxItems: 30,
      currentItems: 0,
      customers: [],
    },
  ],
  addCustomer: (value) => {
    const lines = [...get().lines];
    for (let i = 0; i < lines.length; i++) {
      // check if line can accompodate new customer
      if (lines[i].maxItems - lines[i].currentItems - value >= 0) {
        return set((state) => {
          const updatedLine = {
            ...state.lines[i],
            currentItems: state.lines[i].currentItems + Number(value),
            customers: [...state.lines[i].customers, { items: Number(value) }],
          };
          const newLines = [...state.lines];
          newLines[i] = updatedLine;

          return { lines: newLines };
        });
      }
    }
  },
  removeItem: (lineId) => {
    const lines = [...get().lines];
    for (let i = 0; i < lines.length; i++) {
      // find line with match lineId
      if (lines[i].id === lineId && lines[i].currentItems > 0) {
        // remove one item from first customer in line
        return set((state) => {
          const updatedCustomers = [...state.lines[i].customers];

          // handle when customer is out of items
          let updatedLine = null;
          if (updatedCustomers[0].items - 1 <= 0) {
            updatedCustomers.shift();
            updatedLine = {
              ...state.lines[i],
              currentItems: state.lines[i].currentItems - 1,
              customers: updatedCustomers,
            };
          } else {
            updatedCustomers[0].items = updatedCustomers[0].items - 1;
            updatedLine = {
              ...state.lines[i],
              currentItems: state.lines[i].currentItems - 1,
              customers: updatedCustomers,
            };
          }

          const newLines = [...state.lines];
          newLines[i] = updatedLine;

          return { lines: newLines };
        });
      }
    }
  },
}));

export default useGroceryStore;
