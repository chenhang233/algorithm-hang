/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend == 0) {
    return 0
  }
  if (dividend === -(2 ** 31) && divisor === -1) {
    return 2 ** 31 - 1
  }
  if (dividend === -(2 ** 31) && divisor === 1) {
    return -(2 ** 31)
  }
  let negative = (dividend ^ divisor) < 0
  let t = Math.abs(dividend)
  let d = Math.abs(divisor)
  let result = 0
  for (let i = 31; i >= 0; i--) {
    if (t >>> i >= d) {
      result += 1 << i
      t -= d << i
    }
  }
  return negative ? -result : result
}
