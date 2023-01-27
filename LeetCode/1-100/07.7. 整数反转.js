/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const arr = x.toString().split('')
  let lose = false
  let result = null
  if (arr[0] === '-') {
    lose = true
    arr.shift()
  }
  arr.reverse()
  let i = 0
  while (!arr[i]) {
    arr.shift()
    i++
  }
  const num = +arr.join('')
  result = num
  if (lose) {
    if (-Math.pow(2, 31) > -num) {
      result = 0
    } else {
      result = -result
    }
  } else {
    if (Math.pow(2, 31) < num) {
      result = 0
    }
  }
  return result
}
