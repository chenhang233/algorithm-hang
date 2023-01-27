/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let res = 0,
    last1 = -1,
    last2 = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= left && nums[i] <= right) {
      last1 = i
    } else if (nums[i] > right) {
      last1 = -1
      last2 = i
    }
    if (last1 !== -1) {
      res += last1 - last2
    }
  }
  return res
}
