import "../styles/Store.scss";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
// import image from "../assets/1.png";
import Sidebar from "./Sidebar";
// import { productData } from "../data";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
//import productData from "../data/data";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/store");
      setProducts(result.data);
      console.log("$$$$", result.data);
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
            {products?.map((product) => (
              <div className="product" key={product.slug}>
                <Link to={`/store/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="about-team-img"
                  />
                </Link>
                <div className="product-info">
                  <Link to={`/store/${product.slug}`}>
                    <p className="product-name">{product.name}</p>
                  </Link>
                  <p className="product-price">
                    <strong> $ {product.price} </strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
