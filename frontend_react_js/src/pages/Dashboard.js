import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import { useCustomers } from "../context/CustomerContext";
import { useAuth } from "../context/AuthContext";

// PUBLIC_INTERFACE
export default function Dashboard({ onCreate }) {
  /** Dashboard with quick stats and recent customers list. */
  const { customers } = useCustomers();
  const { user, logout } = useAuth();

  const total = customers.length;
  const recent = customers.slice(0, 5);

  return (
    <Layout onLogout={logout}>
      <div id="dashboard" className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card
            title="Overview"
            actions={<Button variant="accent" onClick={onCreate}>New Customer</Button>}
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="card p-4">
                <div className="text-xs text-gray-500">Signed in as</div>
                <div className="text-lg font-semibold text-gray-800 mt-1">
                  {user?.name || user?.email}
                </div>
              </div>
              <div className="card p-4">
                <div className="text-xs text-gray-500">Total Customers</div>
                <div className="text-2xl font-bold text-gray-800 mt-1">
                  {total}
                </div>
              </div>
              <div className="card p-4">
                <div className="text-xs text-gray-500">API Base URL</div>
                <div className="text-sm font-medium text-gray-800 mt-1">
                  {process.env.REACT_APP_API_BASE_URL || "Not configured"}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Placeholder for backend integration.
                </div>
              </div>
            </div>
          </Card>

          <Card title="Recent Customers">
            {recent.length === 0 ? (
              <p className="text-sm text-gray-600">
                No customers yet. Click "New Customer" to add one.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="py-2 pr-4">Name</th>
                      <th className="py-2 pr-4">Email</th>
                      <th className="py-2 pr-4">Phone</th>
                      <th className="py-2 pr-4">Company</th>
                      <th className="py-2 pr-4">Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recent.map((c) => (
                      <tr key={c.id} className="border-t border-gray-100">
                        <td className="py-2 pr-4">
                          {c.firstName} {c.lastName}
                        </td>
                        <td className="py-2 pr-4">{c.email}</td>
                        <td className="py-2 pr-4">{c.phone}</td>
                        <td className="py-2 pr-4">{c.company || "-"}</td>
                        <td className="py-2 pr-4">
                          {new Date(c.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
        <div className="md:col-span-1 space-y-6">
          <Card title="Quick Actions">
            <div className="flex flex-col gap-2">
              <Button onClick={onCreate}>Create Customer</Button>
              <Button variant="ghost" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Scroll to Top
              </Button>
            </div>
          </Card>
          <Card title="Help">
            <p className="text-sm text-gray-600">
              This UI is wired for in-memory data only. Integrate your backend
              by updating services/api.js and calling it in Auth and Customer contexts.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
