import React from "react";
import { Navigate } from "react-router";

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default AdminProtectedRoute;
