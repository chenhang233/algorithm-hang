/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  let j = nums.length - 1
  let k = nums.length - 1
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }
  if (i < 0) return nums.reverse()

  while (nums[k] <= nums[i]) {
    k--
  }
  ;[nums[k], nums[i]] = [nums[i], nums[k]]
  for (let l = nums.length - 1; j < l; j++, l--) {
    ;[nums[l], nums[j]] = [nums[j], nums[l]]
  }
}
