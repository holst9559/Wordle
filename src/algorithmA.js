import { checkGuess } from "./guessObject";

const guess = "knekt";
const answer = "Kaffe";

export default function algoA(guess, answer) {
  //New array to store the objects in
  const resultArray = new Array(guess.length);

  //Converting both guess and the answer to lowercase
  const humanGuess = guess.toLowerCase();
  const word = answer.toLowerCase();

  //Making the words into arrays
  const guessWord = humanGuess.split("");
  const wordArray = word.split("");

  let indexCheck = "";

  //Loop to check if the position of the guess matches the answer
  for (let i = 0; i < wordArray.length; i++) {
    let letterPosition = wordArray.indexOf(guessWord[i]);

    if (letterPosition === -1) {
      indexCheck = "Incorrect";
    } else if (guessWord[i] === wordArray[i]) {
      indexCheck = "Correct";
    } else {
      indexCheck = "Misplaced";
    }

    const result = new checkGuess(guessWord[i], indexCheck);
    resultArray[i] = result;
    console.log(result);
  }
  return resultArray;
}
