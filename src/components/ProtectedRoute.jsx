import React, { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
