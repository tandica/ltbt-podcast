import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Episode from "./components/Episodes";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/episodes" exact>
          <Episode />
        </Route>
        <div>
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
