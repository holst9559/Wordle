import { describe, expect, it } from "@jest/globals";
import algoA from "../src/algorithmA";

/* 
  Övergripande teststrategi.
    Bryta ut och testa de olika momenten i funktionen, 
    även hantera felmeddelanden så som för långa eller för korta ord.
*/

describe("algoA()", () => {
  const guess = "knekt";
  const answer = "Kaffe";
  const result = algoA(guess, answer);

  //Test to see if the string transforms into an array
  test("Checks if string is an array with lowercase letters", () => {
    expect(result[0].letter).toBe("k");
    expect(result[1].letter).toBe("n");
    expect(result[2].letter).toBe("e");
    expect(result[3].letter).toBe("k");
    expect(result[4].letter).toBe("t");
  });

  //Test to check the index of the guessed word compared to the correct word
  test("Checks if the letters are in the right position", () => {
    expect(result).toBe();
  });
});

/* 
  1. Break out the letters into an array
    1.1 Transform into lowercase
  2. Compare the arrays and return index position 
  3. Convert the letters to objects
    3.1 Give the letters the right attribute
  4. Return the guess

*/
