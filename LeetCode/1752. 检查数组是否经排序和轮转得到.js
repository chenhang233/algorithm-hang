/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let x = 0,
    n = nums.length
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      x = i
      break
    }
  }
  if (x === 0) return true
  for (let j = x + 1; j < n; j++) {
    if (nums[j] < nums[j - 1]) return false
  }
  return nums[0] >= nums[n - 1]
}
