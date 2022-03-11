import axios from "axios";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../Store";

export default function Login() {
  const navigate = useNavigate();
  //get location of the user for creating a new account redirection link
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);

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
    } catch {
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
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
            className="btn btn-dark"
          >
            LOGIN
          </button>
        </div>
        <div>
          New customer?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </form>
    </div>
  );
}
