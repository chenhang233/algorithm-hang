/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function (nums) {
  let n = nums.length,
    minsuffix = nums[n - 1]
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > minsuffix) {
      return false
    }
    minsuffix = Math.min(nums[i + 1], minsuffix)
  }
  return true
}
