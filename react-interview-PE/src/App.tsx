import { useState } from "react";
import { login } from "./util/util";

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
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default App;
