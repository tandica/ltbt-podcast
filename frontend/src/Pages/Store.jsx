import "../styles/Store.scss";
import { Link } from "react-router-dom";
import Navv from "../components/Nav";
import logger from "use-reducer-logger";
import Footer from "../components/Footer";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>LTBT | Store</title>
      </Helmet>
      <div className="store-header-image">
        <Navv />
      </div>
      <div className="store-container">
        <h1 className="store-title">NEW PRODUCTS</h1>
        <div className="products-container">
          <div className="products-list">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              products?.map((product) => (
                <Product product={product} key={product.slug} />
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
