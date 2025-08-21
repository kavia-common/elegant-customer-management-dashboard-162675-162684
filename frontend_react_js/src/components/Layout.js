import React from "react";
import Navbar from "./Navbar";

// PUBLIC_INTERFACE
export default function Layout({ children, onLogout }) {
  /** Top-level layout including Navbar and a centered max-width container. */
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />
      <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
    </div>
  );
}
