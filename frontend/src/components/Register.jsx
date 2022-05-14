import Axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Store } from "../store.js";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { Helmet } from "react-helmet-async";
import Navv from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Register.scss";

export default function Register() {
  const navigate = useNavigate();
  //get location of the user for creating a new account redirection link
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  //post request to users
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await Axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      //action for a successful register
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error("Invalid email or password.");
    }
  };

  //if user info exists, redirect them to the redirect variable
  //makes it impossible for logged in user to see the sign in screen
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div>
      <Helmet>
        <title>LTBT | Register</title>
      </Helmet>
      <div className="register-header-image">
        <Navv />
      </div>
      <div className="register-container">
        <h1 className="my-3">Register</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              placeholder="What's your name?"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email..."
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Create a password..."
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              placeholder="Confirm your password..."
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button type="submit" className="register-button">
              SUBMIT
            </Button>
          </div>
          <div className="mb-3 register-login-message">
            Already have an account?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Login</Link>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
