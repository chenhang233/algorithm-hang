/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let aStr = strs[0]
  for (let i = 1; i < strs.length; ++i) {
    let j = 0
    for (; j < aStr.length; j++) {
      if (strs[i][j] !== aStr[j]) break
    }
    aStr = aStr.substring(0, j)
    if (aStr === '') return aStr
  }
  return aStr
}
