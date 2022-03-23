import React from "react";
import { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Store } from "../Store";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

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
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="py-5 px-md-5 nav"
    >
      <Navbar.Brand href="/" className="nav-logo">
        LTBT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto  w-100  justify-content-end">
          <Nav.Link href="/episodes">EPISODES</Nav.Link>
          <Nav.Link href="/events">EVENTS</Nav.Link>
          <Nav.Link href="/about">ABOUT US</Nav.Link>
          <Nav.Link href="/store">STORE</Nav.Link>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          {cart.cartItems.length > 0 && (
            <span>
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            </span>
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
                <Link to="#signout" onClick={signoutHandler}>
                  Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// import "../styles/Nav.scss";
// import { Link } from "react-router-dom";
// import Badge from "react-bootstrap/Badge";
// import { useContext } from "react";
// import { Store } from "../Store";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "react-toastify/dist/ReactToastify.css";

// import { ToastContainer } from "react-toastify";
// import Navbar from "react-bootstrap/Navbar";
// import { LinkContainer } from "react-router-bootstrap";
// import { Container } from "react-bootstrap";
// import { NavItem } from "react-bootstrap";

// export default function Nav() {
//   const { state, dispatch: ctxDispatch } = useContext(Store);
//   const { cart, userInfo } = state;

//   const signoutHandler = () => {
//     ctxDispatch({ type: "USER_SIGNOUT" });
//     localStorage.removeItem("userInfo");
//     localStorage.removeItem("shippingAddress");
//     localStorage.removeItem("paymentMethod");
//     window.location.href = "/";
//   };

//   return (
//     <Navbar inverse collapseOnSelect>
//       <Navbar.Header>
//         <Navbar.Brand>
//           <a href="#brand">React-Bootstrap</a>
//         </Navbar.Brand>
//         <Navbar.Toggle />
//       </Navbar.Header>
//       <Navbar.Collapse>
//         <Nav>
//           <NavItem eventKey={1} href="#">
//             Link
//           </NavItem>
//           <NavItem eventKey={2} href="#">
//             Link
//           </NavItem>
//           <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//             <NavDropdown.Item eventKey={3.1}>Action</NavDropdown.Item>
//             <NavDropdown.Item eventKey={3.2}>Another action</NavDropdown.Item>
//             <NavDropdown.Item eventKey={3.3}>
//               Something else here
//             </NavDropdown.Item>
//             <NavDropdown.Item divider />
//             <NavDropdown.Item eventKey={3.3}>Separated link</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//         <Nav pullRight>
//           <NavItem eventKey={1} href="#">
//             Link Right
//           </NavItem>
//           <NavItem eventKey={2} href="#">
//             Link Right
//           </NavItem>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>

//     // <Container>
//     //   <Navbar.Brand href="/">LTBT</Navbar.Brand>
//     //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     //   <Navbar.Collapse id="basic-navbar-nav">
//     //     <Link to="/episodes">EPISODES</Link>
//     //     <Link to="/events">EVENTS</Link>
//     //     <Link to="/about">ABOUT US</Link>
//     //     <Link to="/store">STORE</Link>
//     //     <Link to="/contact">CONTACT US</Link>
//     //     <Link to="/login">Login</Link>
//     //     <Link to="/cart">Cart</Link>
//     //     {cart.cartItems.length > 0 && (
//     //       <Badge pill bg="danger">
//     //         {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
//     //       </Badge>
//     //     )}
//     //     {userInfo ? (
//     //       <NavDropdown
//     //         title={userInfo.name}
//     //         id="navbarScrollingDropdown"
//     //         className="dropdown"
//     //       >
//     //         <NavDropdown.Item href="/profile" className="dropdown-item">
//     //           My Profile
//     //         </NavDropdown.Item>
//     //         <NavDropdown.Item href="/orderhistory" className="dropdown-item">
//     //           Order History
//     //         </NavDropdown.Item>
//     //         <NavDropdown.Divider />

//     //         <NavDropdown.Item>
//     //           <Link
//     //             to="#signout"
//     //             onClick={signoutHandler}
//     //             className="dropdown-signout"
//     //           >
//     //             Sign Out
//     //           </Link>
//     //         </NavDropdown.Item>
//     //       </NavDropdown>
//     //     ) : (
//     //       <Link className="nav-link" to="/login">
//     //         Sign In
//     //       </Link>
//     //     )}
//     //   </Navbar.Collapse>
//     // </Container>
//   );
// }
