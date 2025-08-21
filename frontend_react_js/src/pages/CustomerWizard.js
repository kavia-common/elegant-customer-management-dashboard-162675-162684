import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import { useCustomers } from "../context/CustomerContext";
import { useAuth } from "../context/AuthContext";

// PUBLIC_INTERFACE
export default function CustomerWizard({ onDone }) {
  /** A 3-step wizard to create a customer. */
  const { createCustomer } = useCustomers();
  const { logout } = useAuth();

  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});

  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!form.firstName) e.firstName = "First name is required.";
      if (!form.lastName) e.lastName = "Last name is required.";
    } else if (step === 2) {
      if (!form.email || !/.+@.+\..+/.test(form.email))
        e.email = "Valid email required.";
      if (!form.phone) e.phone = "Phone is required.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) next();
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    const res = await createCustomer(form);
    setSaving(false);
    if (res.success) onDone?.();
  };

  const StepIndicator = () => (
    <div className="flex items-center gap-2 mb-4">
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`h-2 flex-1 rounded ${
            s <= step ? "bg-primary" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <Layout onLogout={logout}>
      <div id="create" className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card title="New Customer" className="mb-6">
            <StepIndicator />
            <form onSubmit={step < 3 ? handleNext : handleCreate} className="space-y-4">
              {step === 1 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    error={errors.firstName}
                    required
                  />
                  <Input
                    label="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    error={errors.lastName}
                    required
                  />
                </div>
              )}

              {step === 2 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    error={errors.email}
                    required
                  />
                  <Input
                    label="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    error={errors.phone}
                    required
                  />
                </div>
              )}

              {step === 3 && (
                <div className="grid gap-4">
                  <Input
                    label="Company"
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notes
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, notes: e.target.value }))
                      }
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus-ring"
                      placeholder="Additional details..."
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" onClick={back} disabled={step === 1}>
                  Back
                </Button>
                {step < 3 ? (
                  <Button type="submit">Next</Button>
                ) : (
                  <Button type="submit" disabled={saving}>
                    {saving ? "Creating..." : "Create Customer"}
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card title="Tips">
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
              <li>Use real email formats for better validation.</li>
              <li>Company and notes are optional.</li>
              <li>
                This is a demo: data is stored in memory, not persisted.
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
