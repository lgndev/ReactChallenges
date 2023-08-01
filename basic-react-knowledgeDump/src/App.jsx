import "./App.css";
import AuthenticationContext from "./AuthenticationContext";
import Authentication from "./Authentication";
import Pokemon from "./Pokemon";
import {
  AUTHENTICATION_INITIAL_STATE,
  authenticationReducer,
} from "./AuthenticationReducer";
import { useReducer } from "react";

// - useReducer
// - useContext
// - useState
// - controlled inputs
// - input error handling
// - useMemo / useCallback

const App = () => {
  const [state, dispatch] = useReducer(
    authenticationReducer,
    AUTHENTICATION_INITIAL_STATE
  );

  return (
    <>
      <AuthenticationContext.Provider value={{ state, dispatch }}>
        <Authentication />
        <Pokemon />
      </AuthenticationContext.Provider>
    </>
  );
};

export default App;
