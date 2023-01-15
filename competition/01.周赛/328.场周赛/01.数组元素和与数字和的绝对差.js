/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < nums.length; i++) {
    const c = nums[i]
    sum1 += c
    if (c > 999) sum2 += Math.floor(c / 1000) % 10
    if (c > 99) sum2 += Math.floor(c / 100) % 10
    if (c > 9) sum2 += Math.floor(c / 10) % 10
    sum2 += c % 10
  }
  return Math.abs(sum1 - sum2)
}

console.log(differenceOfSum([1, 15, 6, 3]), differenceOfSum([1, 2, 3, 4]))
