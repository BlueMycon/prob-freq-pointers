"use strict";

// add whatever parameters you deem necessary & write doc comment

/**
 * accept two strings: word and letters.
 * return true if the word can be built with the letters;
 * otherwise, it should return false.
 * @param {string} word
 * @param {string} letters
 * @return {boolean}
 */
function canConstructWord(word, letters) {
  if (letters.length === 0 && word.length > 0) return false;

  let freqWord = getFrequencyCounter(word);
  let freqLetters = getFrequencyCounter(letters);

  for (let key in freqWord) {
    if(!(key in freqLetters)){
      return false;
    }
    if(freqLetters[key] !== undefined){
      if (freqLetters[key] < freqWord[key]) {
        return false;
      }
    }
  }
  return true;
}

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}