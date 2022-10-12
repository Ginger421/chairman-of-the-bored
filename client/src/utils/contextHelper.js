import { createContext } from "react";

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

export default AuthContext;
