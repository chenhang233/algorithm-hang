/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length
  let mostRight = 0
  for (let i = 0; i < n; ++i) {
    if (mostRight >= i) {
      mostRight = Math.max(mostRight, i + nums[i])
      if (mostRight >= n - 1) return true
    }
  }
  return false
}
