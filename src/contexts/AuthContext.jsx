import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const AuthContext = createContext();

// ✅ Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage if present
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Simulated login (replace with real API)
  const login = (email, password) => {
    const fakeUser = {
      id: 1,
      name: "John Doe",
      email,
      phone: "123-456-7890",
      photoURL: "https://randomuser.me/api/portraits/men/75.jpg",
    };
    setUser(fakeUser);
    return true;
  };

  // Simulated register (replace with real API)
  const register = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone: "",
      photoURL: "https://randomuser.me/api/portraits/lego/1.jpg",
    };
    setUser(newUser);
    return true;
  };

  // Logout user
  const logout = () => {
    setUser(null);
  };

  // Update user profile (email, phone, etc.)
  const updateUser = (updatedFields) => {
    setUser((prev) => ({
      ...prev,
      ...updatedFields,
    }));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
