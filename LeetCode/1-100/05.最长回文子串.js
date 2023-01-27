/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = ''
  const trans = (left, right) => {
    let str = ''
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--
      right++
    }
    str = s.slice(left + 1, right)
    console.log(str, 's')
    if (str.length > max.length) {
      max = str
    }
  }
  for (let i = 0; i < s.length; i++) {
    trans(i, i)
    trans(i, i + 1)
  }
  return max
}
