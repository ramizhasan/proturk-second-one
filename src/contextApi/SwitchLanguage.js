import {useSite} from "./context/SiteContext";

function SwitchLanguage() {
  const { language, setLanguage } = useSite();
  //  console.log(data);

  return (
    <>
      <br />
      Mevcut Dil : {language}
      <button onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
        Dil Degistir
      </button>
    </>
  );
}

export default SwitchLanguage;
