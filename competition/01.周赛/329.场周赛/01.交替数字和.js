/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  const str = (n += '')
  let flag = true
  let result = 0
  for (let i = 0; i < str.length; i++) {
    result += flag ? parseInt(str[i]) : -parseInt(str[i])
    flag = !flag
  }
  return result
}

alternateDigitSum(521)
alternateDigitSum(111)
alternateDigitSum(886996)
