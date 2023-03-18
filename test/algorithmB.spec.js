import { describe, expect, it } from "@jest/globals";
import algoB from "../src/algorithmB";

describe("algoB()", () => {
  const wordListInput = ["Katt", "Mage", "Kaffe", "Svart", "Melass", "Enbart"];
  const wordLengthInput = 5;
  const repeatLetterInput = true;

  it("Returns an array with words that has correct length", () => {
    const result = algoB(wordListInput, wordLengthInput, repeatLetterInput);

    console.log(result);
    expect(result[0]).toBe("Kaffe");
    expect(result[1]).toBe("Svart");
  });
});
