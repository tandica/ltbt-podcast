import "../styles/Store.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import image from "../assets/1.png";
import Sidebar from "./Sidebar";
import { productData } from "../data";

export default function Store() {
  return (
    <div>
      <div className="store-header-image">
        <Nav />
      </div>
      <div className="store-container">
        {/* <Sidebar /> */}
        {/* <aside className="sidebar">
          <h3>EXPLORE OUR CATEGORIES</h3>
          <ul>
            <li>
              <a href="/events">Sweaters</a>
            </li>
            <li>
              <a href="/events">Stickers</a>
            </li>
          </ul>
        </aside> */}
        <h1 className="store-title">SHOP OUR MERCH</h1>
        {/* <button className="sidebar-button" onClick="openMenu()">&#9776;</button> */}
        <div className="products-container">
          <div className="products-list">
            {productData.products.map((product) => (
              <div className="product">
                {" "}
                <img
                  className="about-team-img"
                  src={product.image}
                  alt="person"
                />
                <div className="product-name">{product.name}</div>
                <div className="product-price">$ {product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
//47 mins at video
