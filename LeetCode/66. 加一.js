/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[0] === 0) return [1]
  let j = digits.length - 1
  let nextValue = digits[j] + 1
  console.log(nextValue, 'nextValue')
  while (nextValue > 9) {
    if (j === 0) digits.unshift(0)
    console.log(digits)
    debugger
    digits[j - 1] += nextValue / 10
    digits[j] = nextValue % 10
    j--
  }
  if (j === digits.length - 1) {
    digits[j] += 1
  }
  return digits
}

console.log(plusOne([9]))
