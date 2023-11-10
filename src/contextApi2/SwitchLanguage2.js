import {useSite} from "./context2";

function SwitchLanguage() {
  const { language, dispatch } = useSite();
   // console.log(language);

  const toggleLanguage = () => {
    dispatch({
      type: 'TOGGLE_LANGUAGE',
      value: language==='tr' ? 'en' : 'tr'
    })
  }
 
  return (
    <>
      <br />
      Mevcut Dil : {language}
      <button onClick={toggleLanguage}>
        Dil Degistir
      </button>
    </>
  );
}

export default SwitchLanguage;
