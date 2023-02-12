/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let left = 0,
    right = nums.length - 1
  let res = 0
  while (left <= right) {
    if (left !== right) {
      res += parseInt(nums[left] + '' + nums[right])
    } else {
      res += nums[left]
    }
    left++
    right--
  }
  return res
}

findTheArrayConcVal([7, 52, 2, 4])
findTheArrayConcVal([5, 14, 13, 8, 12])
