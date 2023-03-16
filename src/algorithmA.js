import { checkGuess } from "./guessObject";

export default function algoA(guess, answer) {
  //New array to store the objects in
  const resultArray = [new Array(guess.length)];

  //Converting both guess and the answer to lowercase
  const humanGuess = guess.toLowerCase();
  const word = answer.toLowerCase();

  //Making the words into arrays
  const guessWord = humanGuess.split("");
  const wordArray = word.split("");

  const internalArray = [];

  //Sets the index attributes on the letters
  let indexCheck = "";

  //Loop to check if the position of the guess matches the answer
  for (let i = 0; i < wordArray.length; i++) {
    let letterPosition = wordArray.indexOf(guessWord[i]);
    let letterCheck = guessWord[i];

    //Checks if there is any matching letters
    if (letterPosition === -1) {
      indexCheck = "Incorrect";
    } else {
      //Checks if there is an exact match
      if (letterCheck === wordArray[i]) {
        indexCheck = "Correct";
      }
      //Checks if there is a duplicate or not
      else if (internalArray.includes(letterCheck)) {
        for (let j = i; j < wordArray.length; j++) {
          if (wordArray[j] !== letterCheck && j == wordArray.length - 1) {
            indexCheck = "Misplaced";
          } else if (wordArray[j] !== letterCheck) {
            console.log(i);
            console.log(j);
            indexCheck = "Incorrect";
          }
        }
      }
      //Checks if the letter is misplaced
      else if (
        wordArray.includes(letterCheck) &&
        !internalArray.includes(letterCheck)
      ) {
        indexCheck = "Misplaced";
      }
    }

    //Internal array to check if the letter exists in the array of already checked letters
    //Did this instead of filtering the object
    const internalResult = guessWord[i];
    internalArray.push(internalResult);

    const result = new checkGuess(guessWord[i], indexCheck);
    resultArray[i] = result;
  }
  return resultArray;
}
