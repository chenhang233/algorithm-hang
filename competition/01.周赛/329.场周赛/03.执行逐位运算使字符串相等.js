/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function (s, target) {
  let flag = true
  let s1 = ''
  for (let i = 0; i < s.length; i++) {
    s1 += s[i] == 0 ? 1 : 0
  }
  if (s1 === target || Number(s) === 0) return false
  return flag
}

// console.log(makeStringsEqual('11', '00'))
console.log(makeStringsEqual('00', '10'))
