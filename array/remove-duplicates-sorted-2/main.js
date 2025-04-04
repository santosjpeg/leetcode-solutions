/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let i = 2;
  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2])
      nums[i++] = nums[j]
  }
  return i;
}
let arr = [1, 1, 1, 2, 2, 3];
removeDuplicates(arr);
console.log(arr);
