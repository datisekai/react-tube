import React, { FC, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  if (user == null) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }
  return <>{children}</>;
};

export default PrivateLayout;
