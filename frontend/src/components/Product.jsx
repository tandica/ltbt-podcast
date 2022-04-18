import "../styles/Product.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";
import Button from "react-bootstrap/Button";

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    //find if product exists in the cart
    const existItem = cartItems.find((item) => item._id === product._id);
    //if it exists, increase quantity by 1 or set it to 1
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/store/${item._id}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry, product is out of stock.");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  console.log(product);
  // console.log(product._id);

  return (
    <div className="product-container">
      <div className="product" key={product.slug}>
        <Link to={`/store/${product.slug}`}>
          <div className="product-img-div">
            <img
              src={product.image}
              alt={product.name}
              className="about-team-img"
            />
          </div>
        </Link>
        <div className="product-info">
          <Link to={`/store/${product.slug}`}>
            <p className="product-name">{product.name}</p>
          </Link>
          <p className="product-price">
            <strong> $ {product.price} </strong>
          </p>
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of stock
            </Button>
          ) : (
            <Button
              onClick={() => addToCartHandler(product)}
              className="add-to-cart-button"
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
