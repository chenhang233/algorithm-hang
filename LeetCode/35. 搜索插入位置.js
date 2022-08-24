/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let notFound = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    } else if (nums[i] < target) {
      notFound++
    }
  }
  return notFound
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return nums.length
}
