import "../styles/Store.scss";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Store() {
  return (
    <div>
      <div className="store-header-image">
        <Nav />
      </div>
      <div className="store-container">
        <h1 className="store-title">SHOP OUR MERCH</h1>
      </div>
      <Footer />
    </div>
  );
}
