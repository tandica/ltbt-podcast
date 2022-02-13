import "../styles/Store.scss";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import image from "../assets/1.png";
import Sidebar from "./Sidebar";
// import { productData } from "../data";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Store(props) {
  const [products, setProduct] = useState([]);
  console.log("PRODUCTS", products);

  useEffect(() => {
    axios.get("/api/store").then((data) => {
      setProduct(data);
    });

    // const fetchData = async () => {
    //   const { data } = await axios.get("/api/store").then((res) => {
    //     res.send(res.data);
    //   });
    //   setProduct(data);
    //   console.log(data);
    // };
    // fetchData();
    return () => {
      //
    };
  }, []);

  console.log("set prod", setProduct);

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
            {products.map((product) => (
              <div className="product">
                {" "}
                <Link to={"/store/" + product.id}>
                  {" "}
                  <img
                    className="about-team-img"
                    src={product.image}
                    alt="ltbt merch"
                  />
                </Link>
                <div className="product-name">
                  {" "}
                  <Link to={"/store/" + product.id} className="product-name">
                    {product.name}
                  </Link>
                </div>
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
