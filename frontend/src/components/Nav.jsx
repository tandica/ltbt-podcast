import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { Store } from "../Store";
import NavDropdown from "react-bootstrap/NavDropdown";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

export default function Nav() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  };

  return (
    <div className="nav">
      <ToastContainer position="bottom-center" limit={1} />
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
          <NavDropdown
            title={userInfo.name}
            id="navbarScrollingDropdown"
            className="dropdown"
          >
            <NavDropdown.Item href="/profile" className="dropdown-item">
              My Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="/orderhistory" className="dropdown-item">
              Order History
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item>
              <Link
                to="#signout"
                onClick={signoutHandler}
                className="dropdown-signout"
              >
                Sign Out
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
