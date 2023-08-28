import { create } from "zustand";

export const useCounter = create((set, get) => ({
  capture: "0",
  counter: 0,
  error: "",
  setCapture: (capture) => set({ capture }),
  setCounter: (counter) => set({ counter }),
  setError: (error) => set({ error }),
  onBlur: () => {
    const capture = get().capture;
    const counter = get().counter;
    const setCapture = get().setCapture;
    const setCounter = get().setCounter;
    const setError = get().setError;
    const intRegExp = new RegExp(/^[0-9]+$/);

    // validate capture
    if (intRegExp.test(capture)) {
      // capture value only contains char '0' - '9
      const intCapture = parseInt(capture);
      if (intCapture > 10 || intCapture < 0) {
        // capture can only be 0 - 10
        setError("reached counter bounds");
        setCapture(counter.toString());
      } else {
        // valid capture value
        setError("");
        setCapture(intCapture.toString());
        setCounter(intCapture);
      }
    } else {
      setError("only characters 0-9 allowed");
      setCapture(counter.toString());
    }
  },
  onClick: (value) => {
    const counter = get().counter;
    const setCounter = get().setCounter;
    const setCapture = get().setCapture;
    const setError = get().setError;

    // test if update to counter results in outter bounds
    const resultingCounter = counter + value;

    if (resultingCounter >= 0 && resultingCounter <= 10) {
      // counter update is within bounds
      setError("");
      setCapture(resultingCounter.toString());
      setCounter(resultingCounter);
    } else {
      // resulting counter an only be 0 - 10
      setError("reached counter bounds");
    }
  },
  onReset: () => {
    const setCounter = get().setCounter;
    const setCapture = get().setCapture;
    const setError = get().setError;

    // resest everything to initial values
    setCounter(0);
    setCapture("0");
    setError("");
  },
}));
