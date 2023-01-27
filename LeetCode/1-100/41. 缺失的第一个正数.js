/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      nums[i] = nums.length + 1
    }
  }
  for (let j = 0; j < nums.length; j++) {
    let x = Math.abs(nums[j])
    if (x >= 1 && x <= nums.length) {
      nums[x - 1] = nums[x - 1] < 0 ? nums[x - 1] : -nums[x - 1]
    }
  }
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] >= 0) return k + 1
  }
  return nums.length + 1
}
