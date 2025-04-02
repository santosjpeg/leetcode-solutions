/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let solution = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1])
      continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < 0)
        left++;
      else if (sum > 0)
        right--;
      else {
        solution.push([nums[i], nums[left++], nums[right--]]);
        while (nums[left] === nums[left - 1])
          left++;
        while (nums[right] === nums[right + 1])
          right--;
      }
    }
  }

  return solution;
}
