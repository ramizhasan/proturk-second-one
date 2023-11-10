export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
        const theme=  state.theme === "light" ? "dark" : "light";
        localStorage.setItem('theme', theme);
      return {
        ...state, // theme ve language degerleri geliyor
        theme
      };
    case "TOGGLE_LANGUAGE":
        const language = action.value;
        localStorage.setItem('language',language); 
      return {
        ...state, // theme ve language degerleri geliyor
        language //state.language === "tr" ? "en" : "tr",
      };
    default:
      return state;
  }
}
