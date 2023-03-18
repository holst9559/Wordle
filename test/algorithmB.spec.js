import { describe, expect, it } from "@jest/globals";
import algoB from "../src/algorithmB";
import { toBeOneOf } from "jest-extended/all";

describe("algoB()", () => {
  it("Returns an array with words that has correct length", () => {
    const result = algoB(
      ["Katt", "Mats", "Svart", "kaffe", "Enbart", "Hyperaktiv"],
      5,
      true
    );
    expect(result).toBeOneOf(["kaffe", "svart"]);
  });

  it("Returns an array with words with no duplicate letters", () => {
    const result = algoB(["Katt", "Svart", "Kaffe", "Enbart"], 5, false);
    expect(result).toBe("svart");
  });

  it("Returns an array with words with duplicate letters", () => {
    const result = algoB(["Kaffe"], 5, true);
    expect(result).toBe("kaffe");
  });

  it("Returns an error message if no matching word is found", () => {
    const result = algoB(
      ["Katt", "Mats", "Kaffe", "Enbart", "Melass"],
      5,
      false
    );
    expect(result).toBe(
      "Error! No matching words, try again with different variables"
    );
  });
});
