"use strict";
/**
 *
 * @param {integer} int1
 * @param {integer} int2
 */
function sameFrequency(int1, int2) {
  const int1String = int1.toString(); // O(1) or O(n) ?
  const int2String = int2.toString();

  if (int1String.length !== int2String.length) return false;

  let freqInt1 = getFrequencyCounter(int1String);
  let freqInt2 = getFrequencyCounter(int2String);

  for (let key in freqInt1) {
    if(!(key in freqInt2)) {
      return false;
    }

    if (freqInt1[key] !== freqInt2[key]) {
      return false;
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