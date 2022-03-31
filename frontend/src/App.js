import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Episodes from "./Pages/Episodes";
import Events from "./Pages/Events";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import ProductPage from "./Pages/ProductPage";
import Cart from "./components/Cart";
import Login from "./components/Login";
import "./styles/App.scss";
import ShippingPage from "./Pages/ShippingPage";
import Register from "./components/Register";
import PaymentPage from "./Pages/PaymentPage";
import PlaceOrder from "./Pages/PlaceOrderPage";
import OrderPage from "./Pages/OrderPage";
import OrderHistoryPage from "./Pages/OrderHistoryPage";
import ProfilePage from "./Pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import AdminRoute from "./components/AdminRoute";
import ProductListAdmin from "./Pages/ProductListAdmin";
import ProductEditAdmin from "./Pages/ProductEditAdmin";

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
        <Route
          path="/order/:id"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orderhistory"
          element={
            <ProtectedRoute>
              <OrderHistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ProductListAdmin />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product/:id"
          element={
            <AdminRoute>
              <ProductEditAdmin />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
