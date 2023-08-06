import { useState } from "react";
import { login } from "./util/util";
import "./App.css";

// Guidelines:
// * You have an incomplete login form
// * You are not allowed to add any additional HTML elements
// * You are not allowed to use refs

// Tasks:
// * The login button should trigger the login() action imported above and pass required data to it
// * Disable the Login button if email is blank OR if password is under 6 letters
// * Disable the Login button while login action is being performed
// * Show an error message from the login() if login fails. The error should be cleared every time user re-attaches to log in
// * Show an alert box (naitive JS) if login succeeds. Investigate the login function to find out how to log in successfully

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>("");
  const [loggingIn, setLoggingIn] = useState(false);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setLoggingIn(true);
          try {
            await login({ email, password });
            alert("log in successful");
            setLoggingIn(false);
          } catch (err: any) {
            setLoggingIn(false);
            setError(err.message);
          }
        }}
      >
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="errorMessage">{error}</div>
        <button
          type="submit"
          disabled={!(!!email && password.length >= 6 && !loggingIn)}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default App;
