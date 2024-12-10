import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { describe, expect, it, vi } from "vitest";

describe("Button Component", () => {
  it("renders the button with the correct value", () => {
    render(<Button value="1" onClick={() => {}} />);

    const button = screen.getByText("1");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = vi.fn();

    render(<Button value="1" onClick={handleClick} />);

    const button = screen.getByText("1");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders multiple buttons with different values", () => {
    render(
      <>
        <Button value="1" onClick={() => {}} />
        <Button value="2" onClick={() => {}} />
      </>
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
