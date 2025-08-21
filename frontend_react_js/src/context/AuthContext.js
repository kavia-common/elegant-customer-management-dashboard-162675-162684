import React, { createContext, useContext, useState } from "react";

/**
 * Simple in-memory auth context for demo purposes.
 * Replace with real API calls using services/api.js and tokens handled securely.
 */
const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export function useAuth() {
  /** Access auth state and actions. */
  return useContext(AuthContext);
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /** Auth provider for the app. */
  const [user, setUser] = useState(null);

  // Simulated login; replace with real API call
  const login = async (email, password) => {
    // Placeholder for API call
    // const res = await api.post('/auth/login', { email, password })
    // setUser(res.user)
    if (email && password) {
      setUser({ email, name: email.split("@")[0] });
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout, isAuthenticated: !!user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
