import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login welcome title", () => {
  render(<App />);
  const title = screen.getByText(/Welcome back/i);
  expect(title).toBeInTheDocument();
});
