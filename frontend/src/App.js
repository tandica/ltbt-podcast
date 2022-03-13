import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import Store from "./components/Store";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Login from "./components/Login";
import "./styles/App.scss";
import ShippingPage from "./components/ShippingPage";
import Register from "./components/Register";
import PaymentPage from "./components/PaymentPage";
import PlaceOrder from "./components/PlaceOrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:slug" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
