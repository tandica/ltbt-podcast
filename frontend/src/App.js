import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Episode from "./components/Episodes";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Store from "./components/Store";
import Product from "./components/Product";
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
        <Route path="/events" exact>
          <Events />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>
        <Route path="/store/:id" exact>
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
