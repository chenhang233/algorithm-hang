/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0
  let n = needle.length
  for (let i = 0; i <= haystack.length - n; ++i) {
    let str = haystack.slice(i, i + n)
    if (str === needle) {
      return i
    }
  }
  return -1
}
