import { useState } from "react";
import TodoAppUseReducer from "./components/TodoAppUseReducer";
import Test from "./Test";
import UseRef from "./components/UseRef";
import UseReducer2 from "./components/UseReducer2";
import TodoAppUseReducer2 from "./components/TodoAppUseReducer2";

function App1() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Goster"}
      </button>
      {show && <Test />}
      <hr className="my-3" />
      <UseRef />
      <hr className="my-3" />

      <hr />
      <TodoAppUseReducer />
      <hr />
      <UseReducer2 />
      <hr />
      <TodoAppUseReducer2 />
    </>
  );
}

