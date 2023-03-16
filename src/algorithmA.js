import { checkGuess } from "./guessObject";

const guess = "knekt";
const answer = "Kaffe";

export default function algoA(guess, answer) {
  const resultArray = new Array(guess.length);

  const humanGuess = guess.toLowerCase();
  const word = answer.toLowerCase();

  const guessWord = humanGuess.split("");
  const wordArray = word.split("");

  let indexCheck = "";

  for (let i = 0; i < wordArray.length; i++) {
    let letterPosition = wordArray.indexOf(guessWord[i]);
    if (letterPosition === -1) {
      indexCheck = "Incorrect";
    }

    const result = new checkGuess(guessWord[i], indexCheck);
    resultArray[i] = result;
  }
  console.log(resultArray[0].letter);
  return resultArray;
}
