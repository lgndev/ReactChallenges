import { create } from "zustand";

interface userStoreType {
  email: string;
  emailRegex: RegExp;
  emailError: string;
  password: string;
  passwordRegex: RegExp;
  passwordError: string;
  errorMessages: {
    email: string;
    password: string;
  };
  loginStatus: boolean;
  loginMessage: string;
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEmailError: (msg: string) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPasswordError: (msg: string) => void;
  setLoginStatus: (sts: boolean) => void;
  setLoginMessage: (msg: string) => void;
  // when typing a Promise, you typically provide the generic type for the resolved value only.
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<string>;
}

export const userStore = create<userStoreType>((set) => ({
  email: "",
  emailRegex: new RegExp("^[^s@]+@[^s@]+.[^s@]+$"),
  emailError: "",
  password: "",
  passwordRegex: new RegExp("^(?=.*[a-zA-Z0-9]).{6,}$"),
  passwordError: "",
  errorMessages: {
    email: "must be a valid email",
    password: "must be at least 6 characters long",
  },
  loginStatus: false,
  loginMessage: "",
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ email: e.target.value }),
  setEmailError: (msg: string) => {
    set({ emailError: msg });
  },
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => {
    set({ password: e.target.value });
  },
  setPasswordError: (msg: string) => {
    set({ passwordError: msg });
  },
  setLoginStatus: (sts: boolean) => {
    set({ loginStatus: sts });
  },
  setLoginMessage: (msg: string) => {
    set({ loginMessage: msg });
  },
  login: async ({ email, password }: { email: string; password: string }) => {
    const delay = (0.07 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (email === "bob@bob.com" && password === "123456") {
          resolve("You are logged in!");
        } else {
          reject(new Error("Invalid email or  password"));
        }
      }, delay);
    });
  },
}));
