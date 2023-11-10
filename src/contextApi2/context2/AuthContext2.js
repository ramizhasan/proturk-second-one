import { useReducer, createContext, useContext } from "react";
import {authReducer} from "./reducer";

const Context = createContext();

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem('user')) || false
  });

  //const [user, setUser] = useState(false);  reducer kullanilacak

  const data = {
   ...state,
   dispatch
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export const useAuth = () => useContext(Context);
