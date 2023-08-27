import { AuthProvider } from "./context/AuthProvider";
import Login from "./context/Login";

const index = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

export default index;
