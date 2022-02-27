import "../styles/Store.scss";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import image from "../assets/1.png";
import Sidebar from "./Sidebar";
// import { productData } from "../data";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function Store(props) {
  // const [products, setProduct] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  //console.log("PRODUCTS", products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {};
  }, []);

  // useEffect(() => {
  //   // axios.get("/store").then((data) => {
  //   //   setProduct(data);
  //   // });

  //   //the one that worked
  //   const fetchData = async () => {
  //     const { data } = await axios.get("http://localhost:5000/api/store");
  //     setProduct(data);
  //     // console.log("here is data", data);
  //   };
  //   fetchData();
  // }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
              <div key={product.id} className="product">
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
