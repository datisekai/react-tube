import React, { FC, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return <>{children}</>;
};

export default PrivateLayout;
