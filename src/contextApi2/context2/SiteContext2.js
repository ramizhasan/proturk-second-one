import { createContext, useContext, useReducer } from "react";
import {siteReducer} from "./reducer";// reducer fonk tanimi reducer(state,action)
const Context = createContext();

const Provider =({children}) => {

//reducer state
const[state, dispatch] = useReducer(siteReducer, {
  theme: localStorage.getItem('theme') || 'light', 
  language: localStorage.getItem('language') ||'tr'
})

/*     const [theme, setTheme] = useState('light'); reducer kullandigim icin kullanimdan kaldirildi
const [language, setLanguage] = useState('tr'); */



const data = {
    //theme, setTheme,language, setLanguage reducer kullanimi icin kaldirildi
    ...state,
    dispatch
}


  return (
    <Context.Provider value={data}>
        {children}
    </Context.Provider>
  )

}

export const useSite = () => useContext(Context);

export default Provider;