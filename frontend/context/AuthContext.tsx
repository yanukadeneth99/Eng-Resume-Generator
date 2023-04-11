import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

type authContextType = {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string | null) => void;
  logout: () => void;
  checkAuthenticated: () => void;
};

const authContextDefaultValues: authContextType = {
  token: null,
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
  checkAuthenticated: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const login = (newToken: string | null) => {
    //setToken(newToken);
    if (newToken != null) localStorage.setItem("token", newToken);

    if (newToken != null) {
      router.push("/");
    }
  };

  const logout = () => {
    setToken("");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const checkAuthenticated = () => {
    setIsAuthenticated(!!token || !!localStorage.getItem("token"));
  };

  const value = {
    token,
    isAuthenticated,
    login,
    logout,
    checkAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
