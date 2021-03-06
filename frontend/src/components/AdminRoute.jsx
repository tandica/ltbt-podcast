import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { Store } from "../store.js";

export default function AdminRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;

  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}
