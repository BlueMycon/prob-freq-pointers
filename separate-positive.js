"use strict";
/**
 *
 * @param {[integers]} nums
 */
function separatePositive(nums) {
  if (nums.length <= 1) return nums;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (nums[left] > 0) {
      left++;
    }
    while (nums[right] < 0) {
      right--;
    }

    if (left < right) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
    }
  }
  
  return nums;
}
