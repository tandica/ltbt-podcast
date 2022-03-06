import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { Store } from "../Store";

export default function Nav() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <div className="nav">
      <div className="nav-logo">
        <a href="/">LTBT</a>
      </div>
      <div className="nav-items">
        <a href="/episodes">EPISODES</a>
        <a href="/events">EVENTS</a>
        <a href="/about">ABOUT US</a>
        <a href="/store">STORE</a>
        <a href="/contact">CONTACT US</a>
        <a href="/contact">Login</a>
        <Link to="/contact">Cart</Link>
        {cart.cartItems.length > 0 && (
          <Badge pill bg="danger">
            {cart.cartItems.length}
          </Badge>
        )}
      </div>
    </div>
  );
}
