/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z' || s[i] >= '0' && s[i] <= '9')
      str += s[i].toLowerCase();
  }
  let low = 0;
  let high = str.length - 1;
  while (low < high) {
    if (str[low++] !== str[high--])
      return false;
  }
  return true;
};
