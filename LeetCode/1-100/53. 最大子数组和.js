/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let prev = 0,
    max = nums[0]
  nums.forEach((v) => {
    prev = Math.max(prev + v, v)
    max = Math.max(max, prev)
  })
  return max
}
