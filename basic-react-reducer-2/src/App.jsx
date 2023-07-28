import "./App.css";
import { INITIAL_STATE, FORM_ACTION_TYPES, formReducer } from "./formReducer";
import { useReducer, useRef } from "react";

function App() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    dispatch({
      type: FORM_ACTION_TYPES.CHANGE_INPUT,
      payload: { name: inputName, value: inputValue },
    });
  };

  const handleAddTags = () => {
    const textAreaValue = textAreaRef.current.value;
    const tagsArr = textAreaValue.split(",");
    dispatch({
      type: FORM_ACTION_TYPES.ADD_TAG,
      payload: tagsArr,
    });
  };

  const handleRemoveTags = (e) => {
    const tagName = e.target.innerText;
    dispatch({
      type: FORM_ACTION_TYPES.REMOVE_TAG,
      payload: tagName,
    });
  };

  const handleDecrease = () => {
    dispatch({ type: FORM_ACTION_TYPES.DECREASE });
  };

  const handleIncrease = () => {
    dispatch({ type: FORM_ACTION_TYPES.INCREASE });
  };

  console.log("state: ", state);
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        onChange={handleChange}
      />
      <p>Category</p>
      <select name="category" id="">
        <option value="jeans">jeans</option>
        <option value="shorts">shorts</option>
        <option value="dress">dress</option>
      </select>
      <p>Tags:</p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="seperate tags with comma"
        ref={textAreaRef}
      ></textarea>
      <div>
        <button onClick={handleAddTags}>Add Tags</button>
      </div>
      <div>
        {state.tags.map((tag) => {
          return (
            <button key={tag} onClick={handleRemoveTags}>
              {tag}
            </button>
          );
        })}
      </div>
      <div>
        <button onClick={handleDecrease}>-</button>
        <p>Quantity({state.quantity})</p>
        <button onClick={handleIncrease}>+</button>
      </div>
    </>
  );
}

export default App;
