export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: "",
};

export const POST_ACTION_TYPES = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

export const postReducer = (state, action) => {
  console.log("action obj: ", action);
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        post: {},
        error: "",
      };

    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
