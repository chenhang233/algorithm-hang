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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function (nums, target) {
  const binarySearch = (nums, target, lower) => {
    let left = 0,
      right = nums.length - 1,
      answer = nums.length
    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      if (nums[middle] > target || (lower && nums[middle] >= target)) {
        right = middle - 1
        answer = middle
      } else {
        left = middle + 1
      }
    }
    return answer
  }
  let result = [-1, -1]
  const leftIndex = binarySearch(nums, target, true)
  const rightIndex = binarySearch(nums, target, false) - 1
  if (nums[leftIndex] === target && nums[rightIndex] === target) {
    result = [leftIndex, rightIndex]
  }
  return result
}
