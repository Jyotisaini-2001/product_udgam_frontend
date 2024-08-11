import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate login logic
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAdmin", "true");
      setIsLoggedIn(true);
      setIsAdmin(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
