import { describe, expect, it } from "@jest/globals";

import algoA from "../src/algorythmA";

describe("algoA()", () => {
  it("returns true", () => {
    const guess = "Hej";
    const answer = "Hej";
    const result = algoA(guess, answer);
    expect(result).toBe(true);
  });
});
