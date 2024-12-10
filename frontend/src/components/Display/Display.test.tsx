import { render, screen } from "@testing-library/react";
import { describe, beforeAll, it, expect, vi } from "vitest";
import { Display } from "./Display";

describe("Display Component", () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, "scrollTo", {
      configurable: true,
      value: vi.fn(),
    });
  });

  it("renders displayValue", () => {
    render(<Display displayValue="1234" />);
    const displayText = screen.getByText("1234");
    expect(displayText).toBeInTheDocument();
  });

  it("calls scrollTo when displayValue changes", () => {
    const { rerender } = render(<Display displayValue="1234" />);

    const scrollToMock = vi.spyOn(HTMLElement.prototype, "scrollTo");
    rerender(<Display displayValue="5678" />);
    expect(scrollToMock).toHaveBeenCalled();

    scrollToMock.mockRestore();
  });
});
