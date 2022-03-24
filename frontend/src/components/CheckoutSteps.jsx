import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/CheckoutSteps.scss";

export default function CheckoutSteps(props) {
  return (
    <div className="checkout-steps-container">
      <Row className="checkout-steps">
        <Col className={props.step1 ? "active" : ""}>Login</Col>
        <Col className={props.step2 ? "active" : ""}>Shipping</Col>
        <Col className={props.step3 ? "active" : ""}>Payment</Col>
        <Col className={props.step4 ? "active" : ""}>Place Order</Col>
      </Row>
    </div>
  );
}
