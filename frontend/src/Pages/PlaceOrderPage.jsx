import CheckoutSteps from "../components/CheckoutSteps";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer } from "react";
import { Store } from "../store.js";
import { toast } from "react-toastify";
import { getError } from "../utils";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import Footer from "../components/Footer";
import Navv from "../components/Nav";
import "../styles/ShippingPage.scss";

//reducer for creating an order
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrder() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  //round to 2 decimal places
  const round = (num) => Math.round(num * 100 + Number.EPSILON) / 100;

  //calculate items price
  cart.itemsPrice = round(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );

  //if total price is more than 100, make shipping price 15 otherwise it is 10
  cart.shippingPrice = cart.itemsPrice > 100 ? round(10) : round(15);

  //tax is 13%
  cart.taxPrice = round(0.13 * cart.itemsPrice);

  //total price
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: "CREATE_REQUEST" });

      const { data } = await axios.post(
        "/api/orders",
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: "CART_CLEAR" });
      dispatch({ type: "CREATE_SUCCESS" });
      localStorage.removeItem("cartItems");
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart, navigate]);

  return (
    <div>
      <Helmet>
        <title>LTBT | Preview Order</title>
      </Helmet>
      <div>
        <Navv />
      </div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="place-order-page-container">
        <h1 className="mb-4 mt-2">Preview Order</h1>
        <Row>
          <Col md={8}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Shipping</Card.Title>
                <Card.Text>
                  <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </Card.Text>
                <Link to="/shipping">Edit</Link>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Payment</Card.Title>
                <Card.Text>
                  <strong>Method:</strong> {cart.paymentMethod}
                </Card.Text>
                <Link to="/payment">Edit</Link>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Items</Card.Title>
                <ListGroup variant="flush">
                  {cart.cartItems.map((item) => (
                    <ListGroup.Item key={item._id}>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded img-thumbnail"
                          ></img>{" "}
                          <Link to={`/store/${item.slug}`}>{item.name}</Link>
                        </Col>
                        <Col md={3}>
                          <span>{item.quantity}</span>
                        </Col>
                        <Col md={3}>$ {item.price}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Link to="/cart">Edit</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>$ {cart.itemsPrice.toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>$ {cart.shippingPrice.toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>$ {cart.taxPrice.toFixed(2)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <strong> Order Total</strong>
                      </Col>
                      <Col>
                        <strong>$ {cart.totalPrice.toFixed(2)}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        type="button"
                        className="place-order-button"
                        onClick={placeOrderHandler}
                        disabled={cart.cartItems.length === 0}
                      >
                        Review Order and Pay
                      </Button>
                    </div>
                    {loading && <LoadingBox></LoadingBox>}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
