import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

type authContextType = {
  token: string | null;
  user: string;
  isAuthenticated: boolean;
  login: (token: string | null, user: string) => void;
  logout: () => void;
  checkAuthenticated: () => void;
};

const authContextDefaultValues: authContextType = {
  token: null,
  user: "",
  isAuthenticated: false,
  login: (token, user) => {},
  logout: () => {},
  checkAuthenticated: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const router = useRouter();

  const login = (newToken: string | null, user: string) => {
    //setToken(newToken);
    if (newToken != null) {
      setUser(user);
      localStorage.setItem("token", newToken);
      localStorage.setItem("user", user);
    }

    if (newToken != null) {
      setUser(user);
      localStorage.setItem("user", user);
      router.push("/");
    }
  };

  const logout = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const checkAuthenticated = () => {
    setIsAuthenticated(!!token || !!localStorage.getItem("token"));
  };

  const value = {
    token,
    user,
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
