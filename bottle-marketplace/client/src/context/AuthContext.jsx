import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get(
          "http://localhost:5000/api/v1/auth/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.data);
      }
    } catch (error) {
      localStorage.removeItem("token");
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      {
        email,
        password,
      }
    );
    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
    return response.data;
  };

  const signup = async (name, email, password) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      {
        name,
        email,
        password,
      }
    );
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
