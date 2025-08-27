import { describe, it, expect } from "vitest";

describe("broken test", () => {
  it("should fail on purpose", () => {
    expect(1 + 1).toBe(3); // specjalnie błędny wynik
  });
});