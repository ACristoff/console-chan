import {
  getRandomArt,
  getRandomTagline,
  logConsoleArt,
  CONSOLE_ART,
  TAGLINES,
} from "../src/index";

describe("getRandomArt", () => {
  it("returns a string", () => {
    expect(typeof getRandomArt()).toBe("string");
  });

  it("returns a value from CONSOLE_ART", () => {
    expect(CONSOLE_ART).toContain(getRandomArt());
  });
});

describe("getRandomTagline", () => {
  it("returns a string", () => {
    expect(typeof getRandomTagline()).toBe("string");
  });

  it("returns a value from TAGLINES", () => {
    expect(TAGLINES).toContain(getRandomTagline());
  });
});

describe("CONSOLE_ART", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(CONSOLE_ART)).toBe(true);
    expect(CONSOLE_ART.length).toBeGreaterThan(0);
  });
});

describe("TAGLINES", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(TAGLINES)).toBe(true);
    expect(TAGLINES.length).toBeGreaterThan(0);
  });
});

describe("logConsoleArt", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls console.log", () => {
    logConsoleArt({ frequency: "navigate" });
    expect(console.log).toHaveBeenCalled();
  });

  it("includes art and tagline in output", () => {
    logConsoleArt({ frequency: "navigate" });
    const output = (console.log as jest.Mock).mock.calls[0][0] as string;
    expect(output).toContain("%c");
  });

  it("uses custom color when provided", () => {
    logConsoleArt({ frequency: "navigate", color: "#ff0000" });
    const styleArg = (console.log as jest.Mock).mock.calls[0][1] as string;
    expect(styleArg).toContain("#ff0000");
  });
});
