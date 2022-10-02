/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a === '0' && b === '0') return '0'
  let min = a
  let max = b
  if (a.length > b.length) {
    min = b
    max = a
  }
  while (min.length < max.length) {
    min = '0' + min
  }
  const resArr = Array.from({ length: min.length + 1 }, () => 0)
  for (let i = min.length - 1; i >= 0; i--) {
    let res = parseInt(min[i]) + parseInt(max[i])
    res += resArr[i + 1]
    if (res === 2) {
      resArr[i + 1] = 0
      resArr[i]++
    } else if (res === 3) {
      resArr[i + 1] = 1
      resArr[i]++
    } else {
      resArr[i + 1] = res
    }
  }
  if (resArr[0] === 0) resArr.shift()
  return resArr.join('')
}
