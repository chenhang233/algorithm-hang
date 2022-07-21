/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const result = s.trim().match(/^[+|-]{0,1}\d+/)
  if (result) {
    if (Math.pow(2, 31) - 1 <= result[0]) {
      return Math.pow(2, 31) - 1
    }
    if (-Math.pow(2, 31) >= result[0]) {
      return -Math.pow(2, 31)
    }
    return result[0]
  }
  return 0
}
