"use strict";
/**
 *
 * @param {[string]} keys
 * @param {[string]} values
 */
function twoArrayObject(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i] || null;
  }
  return obj;
}
