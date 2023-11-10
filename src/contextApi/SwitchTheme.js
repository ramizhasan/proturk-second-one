import {useSite} from "./context/SiteContext";

export default function SwitchTheme() {
  const { theme, setTheme } = useSite();
  return (
    <>
      Mevcut Tema : {theme}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Temayi Degistir
      </button>
    </>
  );
}
