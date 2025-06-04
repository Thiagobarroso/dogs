import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

function ProtectedRout({ children }) {
  const { login } = React.useContext(UserContext);

  return login ? children : <Navigate to="/login" replace />;
}

export default ProtectedRout;
