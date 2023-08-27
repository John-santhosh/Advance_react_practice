import { createContext, useContext, useState } from "react";
import axios from "../../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
// export const useAuthContext = () => useContext(AuthContext);
