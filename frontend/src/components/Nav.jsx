import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { Store } from "../Store";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

export default function Nav() {
  const { state } = useContext(Store);
  const { cart, userInfo } = state;

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
        {/* <a href="/login">Login</a> */}
        <Link to="/cart">Cart</Link>
        {cart.cartItems.length > 0 && (
          <Badge pill bg="danger">
            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
          </Badge>
        )}
        {userInfo ? (
          <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
            <LinkContainer to="/profile">
              <NavDropdown.Item>User Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/orderhistory">
              <NavDropdown.Item>Order History</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
          </NavDropdown>
        ) : (
          <Link to="/user" className="nav-link">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}
