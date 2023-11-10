import { useState } from "react";

import ContextApi from "./contextApi2/ContextApi2";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      {/*  <TodoAppMemoization/>
      <hr /> */}
      {/*   <FormEl /> */}

      <ContextApi/> 
    </>
  );
}

export default App;
