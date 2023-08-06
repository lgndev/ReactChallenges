import "./App.css";
import { userStore } from "./store/userStore";

const App = () => {
  const email = userStore((state) => state.email);
  const setEmail = userStore((state) => state.setEmail);
  const emailRegex = userStore((state) => state.emailRegex);
  const emailError = userStore((state) => state.emailError);
  const setEmailError = userStore((state) => state.setEmailError);
  const password = userStore((state) => state.password);
  const setPassword = userStore((state) => state.setPassword);
  const passwordRegex = userStore((state) => state.passwordRegex);
  const passwordError = userStore((state) => state.passwordError);
  const setPasswordError = userStore((state) => state.setPasswordError);
  const errorMessages = userStore((state) => state.errorMessages);
  const login = userStore((state) => state.login);
  const loginStatus = userStore((state) => state.loginStatus);
  const loginMessage = userStore((state) => state.loginMessage);
  const setLoginStatus = userStore((state) => state.setLoginStatus);
  const setLoginMessage = userStore((state) => state.setLoginMessage);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    // handle email validation
    if (!emailRegex.test(email)) {
      setEmailError(errorMessages.email);
    } else {
      setEmailError("");
    }

    // handle password validation
    if (!passwordRegex.test(password)) {
      setPasswordError(errorMessages.password);
    } else {
      setPasswordError("");
    }

    if (emailRegex.test(email) && passwordRegex.test(password)) {
      try {
        const res = await login({ email, password });

        setLoginStatus(true);
        setLoginMessage(res);
      } catch (err: any) {
        setLoginStatus(false);
        setLoginMessage(err.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email"></label>
          <input
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e);
            }}
          />
          {!!emailError && <p>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e);
            }}
          />
          {!!passwordError && <p>{passwordError}</p>}
        </div>
        <button type="submit">Log In</button>
        <div>
          <p>Login Status: {loginStatus.toString()}</p>
          <p>Login Message: {loginMessage}</p>
        </div>
      </form>
    </>
  );
};

export default App;
