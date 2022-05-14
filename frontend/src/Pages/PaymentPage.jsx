import CheckoutSteps from "../components/CheckoutSteps";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState, useEffect } from "react";
import { Store } from "../store.js";
import Footer from "../components/Footer";
import "../styles/ShippingPage.scss";
import Navv from "../components/Nav";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  //get cart, shipping address and payment method from state
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || "PayPal"
  );

  //check if a shipping address exists
  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  //save payment method
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/order");
  };

  return (
    <div>
      <Helmet>
        <title>LTBT | Payment</title>
      </Helmet>
      <div>
        <Navv />
      </div>
      <div className="payment-container">
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
        <div className="payment-content">
          <h1 className="mb-4 mt-4">Choose a payment method</h1>
          <Form onSubmit={submitHandler}>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="PayPal"
                label="PayPal"
                value="PayPal"
                checked={paymentMethodName === "PayPal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Form.Check
                type="radio"
                id="Stripe"
                label="Credit/Debit Card"
                value="Stripe"
                checked={paymentMethodName === "Stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <Button type="submit" className="payment-button">
                Continue
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
