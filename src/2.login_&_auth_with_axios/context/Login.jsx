import { useContext } from "react";
import { AuthProvider } from "./AuthProvider";
import axios from "../../api/axios";
const Login = () => {
  const { setAuth } = useContext(AuthProvider);
  return <div>Login</div>;
};

export default Login;
