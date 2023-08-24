import { useState } from "react";

const App = () => {
  // create a login form
  // - only enter an email
  // - validate is valid email
  // - login
  // - return no user with email
  // - logged in

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);
  const emailRegExp = new RegExp("^[^s@]+@[^s@]+.[^s@]+$");

  const handleLogin = () => {
    console.log(emailRegExp);
    if (emailRegExp.test(email)) {
      setEmailError("");
      if (email === "correct@email.com") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } else {
      setEmailError("not valid email");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError && <p style={{ color: "red" }}>not valid email</p>}
        {loggedIn !== null && (
          <p>
            login attempt{" "}
            {loggedIn ? (
              <span>successful</span>
            ) : (
              <span style={{ color: "red" }}>failed</span>
            )}
          </p>
        )}
        <div>
          <button type="submit">login</button>
        </div>
      </form>
    </>
  );
};

export default App;
