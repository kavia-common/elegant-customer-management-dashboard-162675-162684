import React from "react";

// PUBLIC_INTERFACE
export default function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}) {
  /** Button component for consistent styling across the app. */
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus-ring disabled:opacity-60 disabled:cursor-not-allowed";
  const styles = {
    primary:
      "bg-primary text-white hover:bg-blue-600 shadow-sm",
    secondary:
      "bg-secondary text-white hover:bg-gray-700 shadow-sm",
    ghost:
      "bg-white text-secondary border border-gray-200 hover:bg-gray-50",
    accent:
      "bg-accent text-white hover:bg-orange-500 shadow-sm",
  };
  return (
    <button
      type={type}
      className={`${base} ${styles[variant] ?? styles.primary} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
