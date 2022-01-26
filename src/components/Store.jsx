import "../styles/Store.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import image from "../assets/1.png";

export default function Store() {
  return (
    <div>
      <div className="store-header-image">
        <Nav />
      </div>
      <div className="store-container">
        <h1 className="store-title">SHOP OUR MERCH</h1>

        <div className="products-container">
          <ul className="products-list">
            <li className="product">
              {" "}
              <img className="about-team-img" src={image} alt="person" />
              <div className="product-name">Product Name</div>
              <div className="product-price">$77</div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
