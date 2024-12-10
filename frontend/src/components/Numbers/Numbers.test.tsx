import { render, screen, fireEvent } from "@testing-library/react";

import { Numbers } from "./Numbers";
import { describe, expect, it, vi } from "vitest";

describe("Numbers Component", () => {
  it("renders all the number buttons", () => {
    render(
      <Numbers
        calculated={false}
        setCalculated={() => {}}
        setDisplayValue={() => {}}
      />
    );

    // Verify buttons have been rendered
    const numbers = [
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      "1",
      "2",
      "3",
      "0",
      ".",
      "e",
    ];
    numbers.forEach((num) => {
      expect(screen.getByText(num)).toBeInTheDocument();
    });
  });

  it("resets the display value if calculated is true when a button is clicked", () => {
    const setMockDisplayValue = vi.fn();
    const setMockCalculated = vi.fn();

    render(
      <Numbers
        calculated={true}
        setCalculated={setMockCalculated}
        setDisplayValue={setMockDisplayValue}
      />
    );

    // Simulate clicking the "6" button
    fireEvent.click(screen.getByText("6"));

    // Verify behaviour
    expect(setMockCalculated).toHaveBeenCalledWith(false);
    expect(setMockDisplayValue).toHaveBeenCalledWith("6");
  });

  it("appends the button value to the display value if calculated is false", () => {
    const setMockDisplayValue = vi.fn((callback) => callback("123"));
    const setMockCalculated = vi.fn();

    render(
      <Numbers
        calculated={false}
        setCalculated={setMockCalculated}
        setDisplayValue={setMockDisplayValue}
      />
    );

    // Simulate clicking the "2" button"
    fireEvent.click(screen.getByText("2"));

    // Verify behaviour
    expect(setMockDisplayValue).toHaveBeenCalled();
    const callback = setMockDisplayValue.mock.calls[0][0];
    expect(callback("123")).toBe("1232");
  });
});
