import React, { createContext, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthAction from "../actions/auth";
import { useLocalStorage } from "usehooks-ts";

export const AuthContext = createContext<any>(undefined);

interface AuthProps {
  children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthProps> = ({ children }) => {
  const [user, setUser] = React.useState<any>();

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
