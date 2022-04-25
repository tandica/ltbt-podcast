import { useContext } from "react";
import { Store } from "../Store";
import MessageBox from "./MessageBox";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Footer from "../components/Footer";
import "../styles/Cart.scss";
import { Helmet } from "react-helmet-async";
import Navv from "../components/Nav";

export default function Cart() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const navigate = useNavigate();

  //add and minus buttons for items inside of cart
  const updateCartHandler = async (item, quantity) => {
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

  //remove item from cart
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <div>
      <Helmet>
        <title>LTBT | Shopping Cart</title>
      </Helmet>
      <Navv />
      <div className="cart-container">
        <div>
          <h1 className="mb-3">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/store">Go to the LTBT Store</Link>
            </MessageBox>
          ) : (
            <ListGroup className="mb-4">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>
                      <Link to={`/store/${item.slug}`} className="item-name">
                        {item.name}
                      </Link>
                    </Col>
                    <Col>
                      <Button
                        variant="outline-secondary"
                        className="rounded-pill"
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        <FontAwesomeIcon icon={faMinusCircle} />
                      </Button>
                      &nbsp; &nbsp;
                      <span>{item.quantity}</span>
                      &nbsp; &nbsp;
                      <Button
                        className="rounded-pill"
                        variant="outline-secondary"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      >
                        <FontAwesomeIcon icon={faPlusCircle} />
                      </Button>
                    </Col>
                    <Col>$ {item.price}</Col>
                    <Col>
                      {" "}
                      <Button
                        className="rounded-pill"
                        variant="danger"
                        onClick={() => removeItemHandler(item)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="trash-icon"
                        />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}{" "}
        </div>
        <Col>
          <Card>
            <Card.Body>
              <ListGroup.Item variant="flush">
                <h3>
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  items) : ${" "}
                  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid">
                  <Button
                    type="button"
                    className="cart-button"
                    onClick={checkoutHandler}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </ListGroup.Item>
            </Card.Body>
          </Card>
        </Col>
      </div>
      <Footer />
    </div>
  );
}
