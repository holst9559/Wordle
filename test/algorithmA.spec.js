import { describe, expect, it } from "@jest/globals";
import algoA from "../src/algorithmA";

/* 
  Testing strategy
    Break out and test the different moments in the function.
    A way to isolate different parts of the code I can move on to 
    different parts when I know things works properly. 
    I also want to be able to check for wrong inputs from the user.
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
    expect(result[0].result).toBe("Correct");
    expect(result[1].result).toBe("Incorrect");
    expect(result[2].result).toBe("Misplaced");
    expect(result[3].result).toBe("Misplaced");
    expect(result[4].result).toBe("Incorrect");
  });

  test("Check if a misplaced letter is already in use somewhere else", () => {});
});

/* 
  Original plan
    1. Break out the letters into an array
      1.1 Transform into lowercase
    2. Compare the arrays and return index position 
    3. Convert the letters to objects
      3.1 Give the letters the right attribute
    4. Return the guess

  How it actually turned out
    1. Break out the letters into an array
      1.1 Transform into lowercase
      1.2 Create class to create new result objects
    2. Compare the arrays and return the index position and
      2.1 Convert letters to objects with a class and asign result attribute

    
    1111111. Return the guess
*/
