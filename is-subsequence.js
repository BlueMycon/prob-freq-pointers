"use strict";
/**
 *
 * @param {string} s1
 * @param {string} s2
 *
 * takes two strings and returns true if the first is a substring of the second
 */
function isSubsequence(s1,s2) {
  let indexInS1 = 0
  let indexInS2 = 0;

  while (indexInS1 < s1.length) {
    while (s1[indexInS1] !== s2[indexInS2]) {

      if (indexInS2 === s2.length - 1) {
        return false;
      }

      indexInS2++;
    }

    indexInS1++;
  }

  return true;
}
