/*
const wordList = ["Katt", "Mage", "Kaffe", "Svart", "Melass", "Enbart"];
const wordLength = 5;
const repeatLetter = true;
*/

import { ConsoleWriter } from "istanbul-lib-report";

export default function algoB(
  wordListInput,
  wordLengthInput,
  repeatLetterInput
) {
  let wordList = wordListInput;
  let wordLength = wordLengthInput;
  let repeatLetter = repeatLetterInput;
  console.log(wordList[0].length);

  const uniqueArray = [];
  const resultArray = [];

  for (let i = 0; i < wordList.length; i++) {
    console.log(wordList[i]);
    if (wordList[i].length == wordLength) {
      resultArray.push(wordList[i]);
    }
  }

  return resultArray;
}
