import { useReducer, useRef, useState, useCallback, useMemo } from "react";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

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
    case 'SET_SEARCH':
      return{
        ...state,
        search: action.value
      }
  }
}

function TodoAppMemoization() {
  console.log("App rentered");

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: '',
    search: ''
  });

  const inputRef = useRef();
  const submitHandle = useCallback((e) => {
    e.preventDefault();

    dispatch({
      //dispatch ile reducer a action i veriyoruz
      type: "ADD_TODO",
      todo: state.todo
    });
  },[state.todo]);

  const onChange = useCallback((e) => {
    //setTodo(e.target.value)
    dispatch({
      type: "SET_TODO",
      value: e.target.value
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: 'SET_SEARCH',
      value: e.target.value
    })
  }

  const filteredTodos = useMemo(()=>(state.todos.filter(todo=> todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase("TR")))),[state.search, state.todos])


  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Arttir</button>
      <hr />
      <h1>Todo App</h1>
      <input type="text" value={state.search} placeholder="Todolarda ara" onChange={searchHandle}/>
      {state.search}
      <hr />
      <AddTodo
        submitHandle={submitHandle}
        onChange={onChange}
        todo={state.todo}
      />

      <Todos todos={filteredTodos} />
    </>
  );
}

export default TodoAppMemoization;
