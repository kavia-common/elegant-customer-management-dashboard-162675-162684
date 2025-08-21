import React, { createContext, useContext, useState } from "react";

/**
 * Customer state management in-memory. Replace create/list with API calls
 * via services/api.js when backend is ready.
 */
const CustomerContext = createContext(null);

// PUBLIC_INTERFACE
export function useCustomers() {
  /** Access customers state and actions. */
  return useContext(CustomerContext);
}

// PUBLIC_INTERFACE
export function CustomerProvider({ children }) {
  /** Customers provider for the app. */
  const [customers, setCustomers] = useState([]);

  const createCustomer = async (payload) => {
    // Placeholder for API call
    // const res = await api.post('/customers', payload);
    const newCustomer = {
      id: Math.random().toString(36).slice(2),
      createdAt: new Date().toISOString(),
      ...payload,
    };
    setCustomers((prev) => [newCustomer, ...prev]);
    return { success: true, customer: newCustomer };
  };

  const value = { customers, createCustomer };
  return (
    <CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>
  );
}
