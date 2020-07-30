import { useContext } from "react";
import authStorage from "./storage";
import AuthContext from "./context";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    setUser();
    authStorage.removeToken();
  };

  return { user, logOut, logIn };
};
