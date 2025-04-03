/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let max = 0;

  //attempt to expand window by iterating right ptr
  while (right < s.length) {
    //if right contains duplicates; iterate by removing left
    //until condition is met
    while (set.has(s[right])) {
      set.delete(s[left++]);
    }

    //append right and expand
    set.add(s[right++]);

    //before the end of outer loop, check if length of susbtr > max
    if (right - left > max)
      max = right - left;
  }
  return max;
}
