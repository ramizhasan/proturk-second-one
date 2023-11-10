import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth } from "./context/AuthContext";

export default function Header() {
  const { user, setUser } = useAuth();

  const login = () => {
    setUser({
      name: "Tayfun",
      id: 1,
    });
  };

  const logout = () => {
    setUser(false);
  }
  //console.log(user);
  return (
    <header>
      HEADER <br />
      {(user && <button onClick={logout}>Cikis Yap</button>) || (
        <button onClick={login}>Giris Yap</button>
      )}
      <hr />
      <SwitchTheme />
      <SwitchLanguage />
    </header>
  );
}
