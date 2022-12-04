/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const arr = sentence.split(' ')
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    const a = arr[i].slice(arr[i].length - 1)
    const b = arr[i + 1].slice(0, 1)
    if (a !== b) {
      return false
    }
  }
  const last = arr[n - 1].slice(arr[n - 1].length - 1)
  const start = arr[0].slice(0, 1)
  if (last !== start) return false
  return true
}

isCircularSentence('leetcode exercises sound delightful')
isCircularSentence('eetcode')
isCircularSentence('Leetcode is cool')
