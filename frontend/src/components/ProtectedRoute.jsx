import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { Store } from "../Store.js";

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return userInfo ? children : <Navigate to="/signin" />;
}
