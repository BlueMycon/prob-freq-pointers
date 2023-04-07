/**
 * accept an array of numbers, nums, and a numeric targetAvg.
 * Determine if there is a pair of numbers in nums where
 * the average of the pair equals targetAvg. There may be more
 * than one pair that matches the average target.
 * @param {[number]} nums
 * @param {number} targetAvg
 * @returns {boolean}
 */
function averagePair(nums, targetAvg) {
  if (nums.length === 0) return false;
  
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

