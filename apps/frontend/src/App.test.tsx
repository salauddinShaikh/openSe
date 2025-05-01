import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    expect(
      screen.getByText(/Vite \+ React \+ TS \+ Tailwind/i)
    ).toBeInTheDocument();
  });

  it("increments count when button is clicked", async () => {
    render(<App />);
    const user = userEvent.setup();

    // Initial state should be 0
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();

    // Click the button
    const button = screen.getByRole("button", { name: /count: 0/i });
    await user.click(button);

    // Count should be incremented
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
