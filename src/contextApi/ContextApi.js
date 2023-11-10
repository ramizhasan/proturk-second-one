import Home from "./Home";
import SiteProvider from "./context/SiteContext";
import AuthProvider from "./context/AuthContext";

function ContextApi() {
  return (
    <SiteProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </SiteProvider>
  );
}
export default ContextApi;
