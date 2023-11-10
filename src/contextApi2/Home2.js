import Footer from "./Footer2";
import Header from "./Header2";
import { useAuth } from "./context2";
export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <h1> ContectApi</h1>
      {user && (
        <div style={{ padding: 10, border: "2px solid red" }}>
          bu alan sadece giris yapilinca gorulecektir.
        </div>
      )}
      <Footer />
    </>
  );
}
