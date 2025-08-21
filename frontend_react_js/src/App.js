import React, { useState, useEffect } from "react";
import "./tailwind.output.css";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CustomerProvider } from "./context/CustomerContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CustomerWizard from "./pages/CustomerWizard";

/**
 * Root App orchestrates simple linear flow:
 * Login -> Customer Creation -> Dashboard
 * Uses in-memory state only, with placeholders for future API calls.
 */

function FlowController() {
  const { isAuthenticated } = useAuth();
  const [flow, setFlow] = useState("login"); // 'login' | 'create' | 'dashboard'

  useEffect(() => {
    if (isAuthenticated && flow === "login") {
      setFlow("create");
    }
  }, [isAuthenticated, flow]);

  if (!isAuthenticated || flow === "login") {
    return <Login onSuccess={() => setFlow("create")} />;
  }

  if (flow === "create") {
    return <CustomerWizard onDone={() => setFlow("dashboard")} />;
  }

  return <Dashboard onCreate={() => setFlow("create")} />;
}

// PUBLIC_INTERFACE
export default function App() {
  /** App entry: wraps providers and renders the flow controller. */
  useEffect(() => {
    document.title = "Customer Manager";
  }, []);
  return (
    <AuthProvider>
      <CustomerProvider>
        <FlowController />
      </CustomerProvider>
    </AuthProvider>
  );
}
