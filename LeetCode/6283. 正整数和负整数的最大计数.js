/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  if (nums[0] > 0) return nums.length
  const findIndex = (nums) => {
    let left = 0,
      right = nums.length - 1
    let index = -1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] < 0) {
        left = mid + 1
        index = mid
      } else {
        right = mid - 1
      }
    }
    return index
  }
  const leftLen = findIndex(nums) + 1
  let zeroCount = 0
  for (let i = leftLen; i < nums.length; i++) {
    if (!nums[i]) {
      zeroCount++
    } else {
      break
    }
  }
  const rightLen = nums.length - leftLen - zeroCount
  return Math.max(leftLen, rightLen)
}
