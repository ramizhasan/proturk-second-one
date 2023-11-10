import Home from "./Home2";
import { SiteContext, AuthContext } from "./context2";

function ContextApi() {
  return (
    <SiteContext>
      <AuthContext>
        <Home />
      </AuthContext>
    </SiteContext>
  );
}
export default ContextApi;
