import "../styles/ProductPage.scss";
import { productData } from "../data/data";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { getError } from "../utils";
import { Store } from "../Store";
import Nav from "./Nav";

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
    </div>
  );
}

export default ProductPage;

//use this hook to get product id
// const { id } = useParams();

//if product id matches id from useParams hook, return product info
// const product = productData.products.find(
//   (productId) => productId.id === Number(id)
// );

//OLD CODE
//   console.log("-----", props.match.params.id);
//   const productDetails = useSelector((state) => state.productDetails);
//   const { product, loading, error } = productDetails;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(detailsProduct(props.match.params.id));

//     return () => {};
//   }, []);

//   return (
//     <div>
//       <div className="store-backlink">
//         <Link to="/store" className="store-backlink">
//           Back to LTBT STORE
//         </Link>
//       </div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : (
//         <div className="product-details-container">
//           <div className="product-details-image">
//             <img src={product.image} alt="ltbt merch" />
//           </div>
//           <div className="product-details-info">
//             <h1 className="product-details-name">{product.name}</h1>
//             <h5 className="product-details-price">$ {product.price}</h5>
//             <p className="product-details-description">{product.description}</p>
//           </div>
//           <div className="product-action">
//             <div className="product-qty">
//               QTY:{" "}
//               <select>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//               </select>
//             </div>
//             <button className="product-cart-button">ADD TO CART</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
