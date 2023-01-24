/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function (s, target) {
  return s.includes('1') === target.includes('1')
}

// console.log(makeStringsEqual('11', '00'))
console.log(makeStringsEqual('00', '10'))
