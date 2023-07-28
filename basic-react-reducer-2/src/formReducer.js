export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const FORM_ACTION_TYPES = {
  CHANGE_INPUT: "CHANGE_INPUT",
  ADD_TAG: "ADD_TAG",
  REMOVE_TAG: "REMOVE_TAG",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_TAG":
      return {
        ...state,
        tags: action.payload,
      };

    case "REMOVE_TAG":
      const tagName = action.payload;
      const index = state.tags.indexOf(tagName);
      const newTags = state.tags.splice(index, 1);
      return {
        ...state,
        tags: newTags,
      };
    case "INCREASE":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
