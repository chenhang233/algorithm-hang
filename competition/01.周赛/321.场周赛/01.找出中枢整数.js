/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n == 1) return 1
  let i = 0,
    j = n
  let i_c = 0,
    j_c = 0
  let count = 0
  while ((i_c === 0 && j_c === 0) || count < n - 1) {
    if (i_c < j_c) {
      i_c += i++
    } else if (i_c > j_c) {
      j_c += j--
    } else {
      i_c += i++
      j_c += j--
    }
    count++
    if (i === j && i_c === j_c) {
      return i
    }
  }
  if (i !== j || i_c !== j_c) return -1
  return i
}
console.log(pivotInteger(4))
console.log(pivotInteger(8))
console.log(pivotInteger(1))
console.log(pivotInteger(49))
console.log(pivotInteger(556))
