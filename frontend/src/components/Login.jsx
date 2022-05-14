import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../store.js";
import Navv from "../components/Nav";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { Helmet } from "react-helmet-async";
import "../styles/Login.scss";

export default function Login() {
  const navigate = useNavigate();
  //get location of the user for creating a new account redirection link
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  //post request to users
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      //action for a successful login
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
        <title>LTBT | Login</title>
      </Helmet>
      <div className="login-header-image">
        <Navv />
      </div>
      <div className="login-container">
        <h1 className="mb-3">Login</h1>
        <form>
          <div className="mb-3 text-left">
            <label for="input-email" class="label-name">
              Email address
            </label>
            <input
              type="email"
              required
              className="form-control"
              id="input-email"
              aria-describedby="emailHelp"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 text-left">
            <label for="input-password" class="label-name">
              Password
            </label>
            <input
              type="password"
              required
              className="form-control"
              id="input-password"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={submitHandler}
              className="login-button"
            >
              LOGIN
            </button>
          </div>
          <div className="login-register-message">
            New customer? <Link to={`/register`}>Create your account</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
