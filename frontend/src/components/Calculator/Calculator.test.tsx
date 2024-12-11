import { render, screen, fireEvent } from "@testing-library/react";
import { Calculator } from "./Calculator";
import { describe, expect, it, vi } from "vitest";

const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "e"];
const operators = ["*", "/", "+", "-"];

// Mock mathjs functions
const mockEvaluate = vi.fn((expression) => {
  if (expression === "invalid expression") {
    throw new Error("Invalid expression");
  }

  return eval(expression);
});

const mockFormat = vi.fn((value, { precision }) => {
  const calculation = Number(value).toFixed(precision);
  return parseFloat(calculation).toString();
});

// Mock child components
vi.mock("../Display/Display", () => ({
  Display: ({ displayValue }: { displayValue: string }) => (
    <div data-testid={"display"}>{displayValue}</div>
  ),
}));

vi.mock("../Numbers/Numbers", () => ({
  Numbers: ({
    setCalculated,
    setDisplayValue,
  }: {
    setCalculated: React.Dispatch<React.SetStateAction<boolean>>;
    setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  }) => (
    <div>
      {numbers.map((num) => (
        <button
          key={num}
          data-testid={`${num}`}
          onClick={() => {
            setCalculated(false);
            setDisplayValue((displayValue) => displayValue + num);
          }}
        >
          {num}
        </button>
      ))}
    </div>
  ),
}));

vi.mock("../Operators/Operators", () => ({
  Operators: ({
    setCalculated,
    setDisplayValue,
  }: {
    setCalculated: React.Dispatch<React.SetStateAction<boolean>>;
    setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  }) => (
    <div>
      {operators.map((operator) => (
        <button
          key={operator}
          data-testid={`${operator}`}
          onClick={() => {
            setCalculated(false);
            setDisplayValue((displayValue) => `${displayValue} ${operator} `);
          }}
        >
          {operator}
        </button>
      ))}
    </div>
  ),
}));

vi.mock("../Actions/Actions", () => ({
  Actions: ({
    displayValue,
    setCalculated,
    setDisplayValue,
  }: {
    displayValue: string;
    setCalculated: React.Dispatch<React.SetStateAction<boolean>>;
    setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  }) => (
    <div>
      <button
        data-testid={"C"}
        onClick={() => {
          setCalculated(false);
          setDisplayValue("");
        }}
      >
        C
      </button>
      <button
        data-testid={"="}
        onClick={() => {
          try {
            const calculation = mockEvaluate(displayValue);
            const formattedCalculation = mockFormat(calculation, {
              precision: 14,
            });

            setCalculated(true);
            setDisplayValue(formattedCalculation);
          } catch {
            setDisplayValue("ERROR");
          }
        }}
      >
        =
      </button>
    </div>
  ),
}));

describe("Calculator Component", () => {
  it("renders all child components", () => {
    render(<Calculator />);

    // Verify Display renders
    expect(screen.getByTestId("display")).toBeInTheDocument();

    // Verify Numbers renders
    numbers.forEach((num) => {
      expect(screen.getByTestId(`${num}`)).toBeInTheDocument();
    });

    // Verify Operators renders
    operators.forEach((operator) => {
      expect(screen.getByTestId(`${operator}`)).toBeInTheDocument();
    });

    // Verify Actions renders
    expect(screen.getByTestId("C")).toBeInTheDocument();
    expect(screen.getByTestId("=")).toBeInTheDocument();
  });

  it("updates the display when the Number buttons are clicked", () => {
    render(<Calculator />);

    const display = screen.getByTestId("display");

    // Simulate clicking the number buttons
    fireEvent.click(screen.getByTestId("2"));
    expect(display).toHaveTextContent("2");

    fireEvent.click(screen.getByTestId("."));
    expect(display).toHaveTextContent("2.");

    fireEvent.click(screen.getByTestId("6"));
    expect(display).toHaveTextContent("2.6");

    fireEvent.click(screen.getByTestId("e"));
    expect(display).toHaveTextContent("2.6e");
  });

  it("appends operators when the Operator buttons are clicked", () => {
    render(<Calculator />);

    const display = screen.getByTestId("display");

    // Simulate clicking a number
    fireEvent.click(screen.getByTestId("4"));
    expect(display).toHaveTextContent("4");

    // Simulate clicking an operator
    fireEvent.click(screen.getByTestId("+"));
    expect(display).toHaveTextContent("4 +");
  });

  it("clears the display when the Clear button is clicked", () => {
    render(<Calculator />);

    const display = screen.getByTestId("display");
    const clearButton = screen.getByTestId("C");

    // Simulate entering some input
    fireEvent.click(screen.getByTestId("5"));
    fireEvent.click(screen.getByTestId("1"));
    fireEvent.click(screen.getByTestId("+"));
    fireEvent.click(screen.getByTestId("9"));

    // Verfiy the expression
    expect(display).toHaveTextContent("51 + 9");

    // Simulate clicking the Clear button
    fireEvent.click(clearButton);
    expect(display).toHaveTextContent("");
  });

  it("calculates the result when the Equals button is clicked", () => {
    render(<Calculator />);

    const display = screen.getByTestId("display");

    // Simluate entering a calculation
    fireEvent.click(screen.getByTestId("8"));
    fireEvent.click(screen.getByTestId("-"));
    fireEvent.click(screen.getByTestId("3"));

    // Verify the expression
    expect(display).toHaveTextContent("8 - 3");

    // Simulate clicking the equals button
    fireEvent.click(screen.getByTestId("="));

    expect(display).toHaveTextContent("5");
  });
});
