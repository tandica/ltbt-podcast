import "../styles/ProductPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { Store } from "../Store";
import Navv from "../components/Nav";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

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

  const [selectedImage, setSelectedImage] = useState("");

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
      <Navv />
      <Row className="single-product-container">
        <div className="product-image-div">
          <img
            className="product-image"
            src={selectedImage || product.image}
            alt={product.name}
          ></img>
        </div>

        <div className="product-info">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>

            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              <Row xs={1} md={2} className="g-2">
                {[product.image, ...product.images].map((x) => (
                  <Col key={x}>
                    <Card>
                      <Button
                        className="thumbnail"
                        type="button"
                        variant="light"
                        onClick={() => setSelectedImage(x)}
                      >
                        <Card.Img variant="top" src={x} alt="product" />
                      </Button>
                    </Card>
                  </Col>
                ))}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="product-checkout">
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="dark">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">NOT IN STOCK</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        onClick={addToCartHandler}
                        variant="primary"
                        className="product-button"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Footer />
    </div>
  );
}

export default ProductPage;

{
  /* <div>
<Helmet>
  <title>LTBT | {product.name}</title>
</Helmet>
<Navv />
<div className="single-product-container">
  <div className="product-info">
    <div className="product-name">{product.name}</div>
    <div className="product-descrption">{product.description}</div>
    <div className="product-price">$ {product.price}</div>
    <ListGroup.Item>
      <Row xs={1} md={2} className="g-2">
        {[product.image, ...product.images].map((x) => (
          <Col key={x}>
            <Card>
              <Button
                className="thumbnail"
                type="button"
                variant="light"
                onClick={() => setSelectedImage(x)}
              >
                <Card.Img variant="top" src={x} alt="product" />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </ListGroup.Item>
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
  <img src={selectedImage || product.image} alt={product.name}></img>
</div>
<Footer />
</div> */
}
