import { useSite } from "./context2";

export default function SwitchTheme() {
  const { theme, dispatch } = useSite();

  const switchTheme = () => {
    dispatch({
      type: "TOGGLE_THEME"
    });
  };
  return (
    <>
      Mevcut Tema : {theme}
      <button onClick={switchTheme}>Temayi Degistir</button>
    </>
  );
}
