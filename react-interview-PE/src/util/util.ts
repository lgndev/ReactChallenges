interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginCredentials) => {
  const delay = (0.07 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(password);
      if (password === "password123" && !!email) {
        resolve(null);
      } else {
        reject(new Error("Invlaid email or password"));
      }
    }, delay);
  });
};
