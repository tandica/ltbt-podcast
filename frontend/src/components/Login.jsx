import { Link, useLocation } from "react-router-dom";

export default function Login() {
  //get location of the user for creating a new account redirection link
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

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
          />
        </div>
        <div>
          <button type="submit" className="btn btn-dark">
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
