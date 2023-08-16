import login from "./util/util";
import { useState } from "react";

// Guidelines:
// * You have an incomplete login form
// * You are not allowed to add any additional HTML elements
// * You are not allowed to use refs

// Tasks:
// * The login button should trigger the login() action imported above and pass required data to it
// DONE

// * Disable the Login button if email is blank OR if password is under 6 letters
// DONE

// * Disable the Login button while login action is being performed
// DONE
// * Show an error message from the login() if login fails. The error should be cleared every time user re-attaches to log in
// DONE
// * Show an alert box (naitive JS) if login succeeds. Investigate the login function to find out how to log in successfully
// DONE

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  //
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="errorMessage" style={{ color: "red" }}>
          {error && error}
        </div>
        <button
          type="submit"
          onClick={async () => {
            try {
              setError("");
              setLoggingIn(true);
              const res = await login({ email, password });
              setLoggingIn(false);
              alert("LOGGED IN");
            } catch (error) {
              setLoggingIn(false);
              setError(error.message);
            }
          }}
          disabled={!!!email || password.length < 6 || loggingIn}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default App;
