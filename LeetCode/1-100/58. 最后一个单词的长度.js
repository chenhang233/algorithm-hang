/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr = s.split(' ').filter((v) => v)
  const len = arr[arr.length - 1].length
  return len
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
  let index = s.length - 1
  while (s[index] === ' ') {
    index--
  }
  let count = 0
  while (index >= 0 && s[index] !== ' ') {
    count++
    index--
  }
  return count
}
