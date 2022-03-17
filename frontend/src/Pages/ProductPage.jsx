import "../styles/ProductPage.scss";
import { productData } from "../data/data";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { Store } from "../Store";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductPage(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/store/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };

    fetchData();
  }, [slug]);

  //add to cart functionality
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    //find if product exists in the cart
    const existItem = cart.cartItems.find((item) => item._id === product._id);
    //if it exists, increase quantity by 1 or set it to 1
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/store/${product._id}`);
    //check if there's enough product in stock
    if (data.countInStock < quantity) {
      window.alert("Sorry, product is out of stock.");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Nav />
      <div className="single-product-container">
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-descrption">{product.description}</div>
          <div className="product-price">$ {product.price}</div>
          {product.countInStock > 0 ? (
            <p className="product-status">IN STOCK</p>
          ) : (
            <p className="product-status">OUT OF STOCK</p>
          )}
          {product.countInStock > 0 ? (
            <button className="product-button" onClick={addToCartHandler}>
              ADD TO CART
            </button>
          ) : (
            <button className="product-button-nostock">ADD TO CART</button>
          )}
        </div>
        <img src={product.image} alt={product.name}></img>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
