export const USER_ACTION_TYPES = {
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        id: 1,
        username: "bob",
        email: "bob@bob.com",
      };
    case "USER_LOGOUT":
      return null;
    default:
      return state;
  }
};
