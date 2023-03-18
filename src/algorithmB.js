import duplicateLetters from "./duplicateLetters";

export default function algoB(
  wordListInput,
  wordLengthInput,
  repeatLetterInput
) {
  let wordList = wordListInput;
  let wordLength = wordLengthInput;
  let repeatLetter = repeatLetterInput;

  const wordArray = [];
  const resultArray = [];

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i].length == wordLength) {
      wordArray.push(wordList[i].toLowerCase());
    }
  }

  for (let i = 0; i < wordArray.length; i++) {
    if (repeatLetter == false) {
      if (duplicateLetters(wordArray[i]) !== repeatLetter) {
        resultArray.push(wordArray[i]);
      }
    } else {
      resultArray.push(wordArray[i]);
    }
  }

  let randomResult = Math.floor(Math.random() * resultArray.length);
  let resultArrayRandom = resultArray[randomResult];

  if (resultArrayRandom == null) {
    return "Error! No matching words, try again with different variables";
  } else {
    return resultArrayRandom;
  }
}
