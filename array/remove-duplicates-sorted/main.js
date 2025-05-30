/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let unique = 0;
  for (let current = 1; current < nums.length; current++) {
    if (nums[current] !== nums[unique]) {
      nums[++unique] = nums[current];
    }
  }

  return unique + 1;
};


