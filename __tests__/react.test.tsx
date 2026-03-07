import { render } from "@testing-library/react";
import { ConsoleArt, useConsoleArt } from "../src/react";

describe("ConsoleArt", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders nothing", () => {
    const { container } = render(<ConsoleArt frequency="navigate" />);
    expect(container.innerHTML).toBe("");
  });

  it("calls console.log on mount", () => {
    render(<ConsoleArt frequency="navigate" />);
    expect(console.log).toHaveBeenCalled();
  });
});

describe("useConsoleArt", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls console.log on mount", () => {
    function TestComponent() {
      useConsoleArt({ frequency: "navigate" });
      return null;
    }
    render(<TestComponent />);
    expect(console.log).toHaveBeenCalled();
  });
});
