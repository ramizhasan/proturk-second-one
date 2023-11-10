import SwitchTheme from "./SwitchTheme2";
import SwitchLanguage from "./SwitchLanguage2";
import { useAuth } from "./context2";

export default function Header() {
  const { user, dispatch } = useAuth();

  const login = () => {
    dispatch({
      type: 'LOGIN',
      payload: {
        name: "Tayfun",
        id: 1
      }
    })
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
 
    })
  };
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
