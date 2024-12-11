import { render, screen, fireEvent } from "@testing-library/react";
import { Actions } from "./Actions";
import { describe, expect, it, vi } from "vitest";

// Mock the useMapping hook
vi.mock("../../hooks/useMapping", () => ({
  useMapping: () => ({
    symbolToOperator: {
      "×": "*",
      "÷": "/",
    },
  }),
}));

// Mock mathjs functions
vi.mock("mathjs", () => ({
  evaluate: vi.fn((expression) => {
    if (expression === "invalid expression") {
      throw new Error("Invalid expression");
    }

    return eval(expression);
  }),
  format: vi.fn((value, { precision }) => {
    const calculation = Number(value).toFixed(precision);
    return parseFloat(calculation).toString();
  }),
}));

describe("Actions Component", () => {
  it("renders the Clear (C) and Equals (=) buttons", () => {
    render(
      <Actions
        displayValue={""}
        setCalculated={() => {}}
        setDisplayValue={() => {}}
      />
    );

    // Check that both buttons are rendered
    expect(screen.getByText("C")).toBeInTheDocument();
    expect(screen.getByText("=")).toBeInTheDocument();
  });

  it("clears the display value when the Clear button is clicked", () => {
    const setMockCalculated = vi.fn();
    const setMockDisplayValue = vi.fn();

    render(
      <Actions
        displayValue="123"
        setCalculated={setMockCalculated}
        setDisplayValue={setMockDisplayValue}
      />
    );

    // Simulate clicking the "C" button
    fireEvent.click(screen.getByText("C"));

    // Verify that calculated is reset to false
    expect(setMockCalculated).toHaveBeenCalledWith(false);

    // Verify that the display value is cleared
    expect(setMockDisplayValue).toHaveBeenCalledWith("");
  });

  it("calculates and sets the result when the Equals button is clicked", () => {
    const setMockCalculated = vi.fn();
    const setMockDisplayValue = vi.fn();

    render(
      <Actions
        displayValue="2 × 3 + 4 ÷ 2"
        setCalculated={setMockCalculated}
        setDisplayValue={setMockDisplayValue}
      />
    );

    // Simulate clicking the "=" button
    fireEvent.click(screen.getByText("="));

    // Verify that calculated is set to true
    expect(setMockCalculated).toHaveBeenCalledWith(true);

    // Verify that the display value is set to the calculated result
    expect(setMockDisplayValue).toHaveBeenCalledWith("8");
  });

  it("handles empty display values when Equals is clicked", () => {
    const setMockCalculated = vi.fn();
    const setMockDisplayValue = vi.fn();

    render(
      <Actions
        displayValue={""}
        setCalculated={setMockCalculated}
        setDisplayValue={setMockDisplayValue}
      />
    );

    // Simulate clicking the "=" button
    fireEvent.click(screen.getByText("="));

    // Verify that the calculated state is updated
    expect(setMockCalculated).toHaveBeenCalledWith(true);

    // Verify that the display value is set to "0"
    expect(setMockDisplayValue).toHaveBeenCalledWith("0");
  });

  it("displays 'ERROR' when the calculation throws an exception", () => {
    const setMockCalculated = vi.fn();
    const setMockDisplayValue = vi.fn();

    render(
      <Actions
        displayValue={"2 ++ 3"}
        setCalculated={setMockCalculated}
        setDisplayValue={setMockDisplayValue}
      />
    );

    // Simulate clicking the "=" button
    fireEvent.click(screen.getByText("="));

    // Verify that the calculated state is updated
    expect(setMockCalculated).toHaveBeenCalledWith(true);

    // Verify that the display value is set to "ERROR"
    expect(setMockDisplayValue).toHaveBeenCalledWith("ERROR");
  });
});
