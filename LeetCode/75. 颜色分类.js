/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i
    let temp = nums[i]
    while (j > 0 && temp < nums[j - 1]) {
      nums[j] = nums[j - 1]
      j--
    }
    nums[j] = temp
  }
}
