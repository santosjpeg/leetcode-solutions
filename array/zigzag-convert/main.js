/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === 1 || s.length <= numRows || numRows === 1) return s;

  let result = Array.from({ length: numRows }, () => "");
  let row = 0;
  let direction = -1;

  for (let i = 0; i < s.length; i++) {
    result[row] += s[i];
    if (row === 0 || row === numRows - 1)
      direction *= -1;

    row += direction;
  }

  return result.join('');
};
