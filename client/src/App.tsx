import React, { useContext, useEffect } from "react";
import Router from "./components/routes";
import { AuthContext } from "./context/AuthContext";
import AuthAction from "./actions/auth";
import { useLocalStorage } from "usehooks-ts";
import Spinner from "./components/Spinner";

const App = () => {
  const { setUser, user } = useContext(AuthContext);
  const [accessToken] = useLocalStorage("accessToken", "");

  useEffect(() => {
    const getMyInfo = async () => {
      const user = await AuthAction.getMyInfo();
      if (user) {
        setUser(user);
      }
    };
    if (accessToken) {
      getMyInfo();
    }else{
      setUser(null)
    }
  }, []);

  if (accessToken && typeof user == "undefined") {
    return <Spinner/>;
  }

  return (
    <>
      <Router />
    </>
  );
};

export default App;
