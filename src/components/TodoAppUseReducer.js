import { useReducer, useRef } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };
  }
}

function TodoAppUseReducer() {
  //console.log(useReducer);
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });
  // console.log('render oldu');
  //console.log(state);
  const inputRef = useRef();
  const submitHandle = (e) => {
    e.preventDefault();

    dispatch({
      //dispatch ile reducer a action i veriyoruz
      type: "ADD_TODO",
      todo: state.todo,
    });
  };

  const onChange = (e) => {
    //setTodo(e.target.value)
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };
  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={submitHandle}>
        <input
          type="text"  value={state.todo}  onChange={onChange}  
        />
        <button type="submit"  disabled={!state.todo} >
          Ekle
        </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoAppUseReducer;
