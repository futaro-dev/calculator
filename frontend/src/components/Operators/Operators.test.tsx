import { render, screen, fireEvent } from "@testing-library/react";
import { Operators } from "./Operators";
import { describe, expect, it, vi } from "vitest";

// Mock the useMapping hook
vi.mock("../../hooks/useMapping", () => ({
  useMapping: () => ({
    operatorToSymbol: {
      "*": "×",
      "/": "÷",
      "+": "+",
      "-": "-",
    },
  }),
}));

describe("Operators Component", () => {
  it("renders all operator buttons with the correct symbols", () => {
    render(<Operators setCalculated={() => {}} setDisplayValue={() => {}} />);

    // Check that all the operator buttons are rendered with the correct symbols
    const symbols = ["×", "÷", "+", "-"];
    symbols.forEach((symbol) => {
      expect(screen.getByText(symbol)).toBeInTheDocument();
    });
  });

  it("handles operator button clicks correctly", () => {
    const setMockCalculated = vi.fn();
    const setMockDisplayValue = vi.fn((callback) => callback("5"));

    render(
      <Operators
        setCalculated={setMockCalculated}
        setDisplayValue={setMockDisplayValue}
      />
    );

    // Simulate clicking the "+" button
    fireEvent.click(screen.getByText("+"));

    // Verify setCalculated is called
    expect(setMockCalculated).toHaveBeenCalledWith(false);

    // Verify setDisplayValue appends the operator with spaces
    const callback = setMockDisplayValue.mock.calls[0][0];
    expect(callback("5")).toBe("5 + ");
  });
});
