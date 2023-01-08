/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  if (nums[0] > 0) return nums.length
  const findIndex = (nums) => {
    let left = 0,
      right = nums.length - 1
    let index = 0
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] < 0) {
        left = mid + 1
        index = mid
      } else if (nums[mid] > 0) {
        right = mid - 1
      } else {
        nums.splice(mid, 1)
      }
    }
    return index
  }
  const leftLen = findIndex(nums) + 1
  const rightLen = nums.length - leftLen
  return Math.max(leftLen, rightLen)
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]))
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]))
console.log(maximumCount([5, 20, 66, 1314]))
