import { describe, expect, it } from "@jest/globals";

import algoA from "../src/algorythmA";

describe("algoA()", () => {
  it("Checks if string is an array", () => {
    const guess = "Kaffe";
    const answer = "Kaffe";
    const result = algoA(guess, answer);
    expect(result).toStrictEqual(["k", "a", "f", "f", "e"]);
  });
});

/* 
  1. Bryt ut alla bokstäver i orden i arrayer
    1.1 Omvandla till lowercase
  2. Jämför arrayerna
  3. Gör om bokstaverna till enskilda objekt
    3.1 Ge bokstäverna korrekt attribut utefter gissning
  4. Returnera gissningen

*/
