import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
