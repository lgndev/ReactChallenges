export const AUTHENTICATION_INITIAL_STATE = {
  loggedIn: false,
  user: null,
};

export const AUTHENTICATION_ACTION_TYPES = {
  LOGGED_IN: "LOGGED_IN",
  LOGGED_OUT: "LOGGED_OUT",
};

export const authenticationReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        loggedIn: true,
        user: {
          id: action.payload.id,
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case "LOGGED_OUT":
      return {
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
