import React, { useContext, useEffect } from "react";
import Router from "./components/routes";
import { AuthContext } from "./context/AuthContext";
import AuthAction from "./actions/auth";
import { useLocalStorage } from "usehooks-ts";

const App = () => {
  const { setUser } = useContext(AuthContext);
  const [accessToken] = useLocalStorage('accessToken','')

  useEffect(() => {
    const getMyInfo = async () => {
      const user = await AuthAction.getMyInfo();
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    };
    accessToken &&  getMyInfo();
  }, []);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
