const guess = "Hej";
const answer = "Hej";

export default function algoA(guess, answer) {
  const humanGuess = guess;
  const machineAnswer = answer;

  if (humanGuess == machineAnswer) {
    return true;
  } else {
    return false;
  }
}
