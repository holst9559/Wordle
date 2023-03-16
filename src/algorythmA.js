const guess = "Kaffe";
const answer = "Kaffe";

export default function algoA(guess, answer) {
  const humanGuess = guess.toLowerCase();
  const word = answer.toLowerCase();

  const humanArray = humanGuess.split("");
  const wordArray = word.split("");

  if (humanGuess == word) {
    return humanArray;
  } else {
    return false;
  }
}
