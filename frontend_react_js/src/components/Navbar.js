import React from "react";
import Button from "./Button";

// PUBLIC_INTERFACE
export default function Navbar({ onLogout }) {
  /** Top navigation bar. */
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            aria-hidden="true"
            className="h-6 w-6 rounded bg-primary"
            title="Logo"
          />
          <span className="font-semibold text-gray-800">Customer Manager</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#dashboard"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Dashboard
          </a>
          <a
            href="#create"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Create Customer
          </a>
          <Button variant="ghost" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}
