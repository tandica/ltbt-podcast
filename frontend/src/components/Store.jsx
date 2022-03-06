import "../styles/Store.scss";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import logger from "use-reducer-logger";
import Footer from "./Footer";
import Product from "./Product";
// import image from "../assets/1.png";
import Sidebar from "./Sidebar";
// import { productData } from "../data";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
//import productData from "../data/data";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Store() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/store");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="store-header-image">
        <Nav />
      </div>
      <div className="store-container">
        <h1 className="store-title">NEW PRODUCTS</h1>
        <div className="products-container">
          <div className="products-list">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              products?.map((product) => (
                <Product product={product} key={product.id} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Store;

// const [products, setProduct] = useState([]);

//OLD CODE
// const productList = useSelector((state) => state.productList);
// const { products, loading, error } = productList;

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(listProducts());

//   return () => {};
// }, []);

//OLD OLD CODE
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

//OLD CODE
//   return loading ? (
//     <div>Loading...</div>
//   ) : error ? (
//     <div>{error}</div>
//   ) : (
//     <div>
//       <div className="store-header-image">
//         <Nav />
//       </div>
//       <div className="store-container">
//         {/* <Sidebar /> */}
//         {/* <aside className="sidebar">
//           <h3>EXPLORE OUR CATEGORIES</h3>
//           <ul>
//           <li>
//           <a href="/events">Sweaters</a>
//           </li>
//           <li>
//           <a href="/events">Stickers</a>
//           </li>
//           </ul>
//         </aside> */}
//         <h1 className="store-title">SHOP OUR MERCH</h1>
//         {/* <button className="sidebar-button" onClick="openMenu()">&#9776;</button> */}
//         <div className="products-container">
//           <div className="products-list">
//             {products.map((product) => (
//               <div key={product.id} className="product">
//                 {" "}
//                 <Link to={"/store/" + product.id}>
//                   {" "}
//                   <img
//                     className="about-team-img"
//                     src={product.image}
//                     alt="ltbt merch"
//                   />
//                 </Link>
//                 <div className="product-name">
//                   {" "}
//                   <Link to={"/store/" + product.id} className="product-name">
//                     {product.name}
//                   </Link>
//                 </div>
//                 <div className="product-price">$ {product.price}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
