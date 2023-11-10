import Footer from "./Footer";
import Header from "./Header";
import { useAuth } from "./context/AuthContext";
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
