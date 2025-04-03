/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;

  let max = 0;
  while (right < s.length) {
    while (set.has(s[right])) {

      set.delete(s[left++]);
    }
    set.add(s[right++]);
    if (right - left > max)
      max = right - left;
  }
  return max;
}
