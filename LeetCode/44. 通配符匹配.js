/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let strIndex = 0
  let pIndex = 0
  let strLen = s.length
  let pLen = p.length
  let currentPindex = -1
  let matchNum = 0
  let star = -1
  while (strIndex < strLen) {
    if (pIndex < pLen && (s[strIndex] === p[pIndex] || p[pIndex] === '?')) {
      strIndex++
      pIndex++
    } else if (pIndex < pLen && p[pIndex] === '*') {
      matchNum = 0
      star = strIndex
      currentPindex = pIndex
      pIndex++
    } else if (star !== -1) {
      matchNum++
      strIndex = star + matchNum
      pIndex = currentPindex + 1
    } else {
      return false
    }
  }
  while (pIndex < pLen && p[pIndex] === '*') {
    pIndex++
  }
  return pLen === pIndex
}
