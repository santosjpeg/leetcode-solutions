/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let sol = [];

  let i = 0, j = i + 1; k = j + 1;
  let pivot = nums[i];
  for (j; j < nums.length - 1; j++) {
    for (k; k < nums.length; k++) {
      if (pivot + nums[j] + nums[k] === 0)
        sol.push([nums[i], nums[j], nums[k]]);
    }
  }

  return sol;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
