/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let right = -1
  let max = 0
  let n = s.length
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      set.delete(s.charAt(i - 1))
    }
    while (n > right + 1 && !set.has(s.charAt(right + 1))) {
      set.add(s.charAt(right + 1))
      right++
    }
    max = Math.max(max, right - i + 1)
  }
  return max
}
