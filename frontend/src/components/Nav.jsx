import React from "react";
import { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Store } from "../Store";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";

export default function Navv() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/";
  };
  return (
    <div className="nav-container">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="">
        <Navbar.Brand href="/" className="nav-logo">
          LTBT
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="nav-toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-dropdown">
          <Nav
            className="me-auto  w-100  justify-content-end"
            id="nav-links-container"
          >
            <Nav.Link href="/episodes" className="nav-links">
              EPISODES
            </Nav.Link>
            <Nav.Link href="/events" className="nav-links">
              EVENTS
            </Nav.Link>
            <Nav.Link href="/about" className="nav-links">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="/store" className="nav-links">
              STORE
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-links">
              CONTACT US
            </Nav.Link>
            <Nav.Link href="/cart" className="nav-links">
              Cart{"  "}
              {cart.cartItems.length > 0 && (
                <span>
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                </span>
              )}
            </Nav.Link>

            {userInfo ? (
              <NavDropdown
                title={userInfo.name}
                id="navbarScrollingDropdown"
                className="dropdown"
                align="end"
              >
                <NavDropdown.Item href="/profile" className="dropdown-item">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/orderhistory"
                  className="dropdown-item"
                >
                  Order History
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item>
                  <Link to="#signout" onClick={signoutHandler}>
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login" className="nav-links">
                Login
              </Nav.Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="admin-nav-dropdown" align="end">
                <NavDropdown.Item href="/admin/dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/productlist">
                  Products
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/orderlist">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item href="/admin/userlist">
                  Users
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
