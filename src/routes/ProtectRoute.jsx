/** @format */

import React, { useContext } from "react";
import { AuthProvider } from "../provider/RoutesProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <div>Loading......</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectRoute;
