import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { beforeAll, describe, it, vi } from "vitest";

beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, "scrollTo", {
    configurable: true,
    value: vi.fn(),
  });
});

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    screen.debug();
  });
});
