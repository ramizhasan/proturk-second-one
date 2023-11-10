import { useReducer, useRef } from "react";

const add = "ADD_TODO";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case add:
      return {
        ...state,
        todos: [...state.todos, action.value],
      };
    default:
      return state;
  }
}

function TodoAppUseReducer2() {
  
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const inputRef = useRef();
  // console.log(state.todos);

  function submitHandle() {
    dispatch({
      type: add,
      value: inputRef.current.value,
    });
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <input type="text" ref={inputRef} />
        <button type="submit">Ekle</button>
      </form>
    </>
  );
}

export default TodoAppUseReducer2;
