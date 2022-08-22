/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let flagStart = true
  let resArr = [-1, -1]
  for (let i = 0; i < nums.length; ++i) {
    if (flagStart && nums[i] === target) {
      flagStart = false
      resArr[0] = i
    }
    if (!flagStart && nums[i] === target) {
      resArr[1] = i
    }
  }
  return resArr
}
