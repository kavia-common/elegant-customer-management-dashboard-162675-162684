import React from "react";

// PUBLIC_INTERFACE
export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  error,
  required = false,
}) {
  /** Text input with label and error message. */
  const id = name || label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border ${
          error ? "border-red-300" : "border-gray-300"
        } bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus-ring`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
