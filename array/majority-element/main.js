/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let hash = {};

  let num;
  for (num in nums) {
    hash[num] = hash[num] ? hash[num + 1] : 1;
  }

  for (i in hash) {
    if (hash[i] > nums.length / 2)
      return i;
  }

};
