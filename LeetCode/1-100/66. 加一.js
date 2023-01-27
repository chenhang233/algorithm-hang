/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[0] === 0) return [1]
  const n = digits.length
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      for (let j = i + 1; j < n; j++) {
        digits[j] = 0
      }
      return digits
    }
  }
  const result = Array.from({ length: n + 1 }, () => 0)
  result[0] = 1
  return result
}

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
