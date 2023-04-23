import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthAction from "../../actions/auth";
import { auth, googleProvider } from "../../actions/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useLocalStorage } from "usehooks-ts";
import { AuthContext } from "../../context/AuthContext";

const useLoginGoogle = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");

  const { setUser } = useContext(AuthContext);
  const { mutateAsync } = useMutation(AuthAction.loginSocial);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const token = await response.user.getIdToken();
      const googleResponse = await mutateAsync({ token });
      setAccessToken(googleResponse.accessToken);
      setRefreshToken(googleResponse.refreshToken);
      setUser(googleResponse.user);
      signOut(auth);
    } catch (error) {
      console.log(error);
      setError("Có lỗi xảy ra, vui lòng thử lại sau")
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignIn,
    loading,
    error,
  };
};

export default useLoginGoogle;
