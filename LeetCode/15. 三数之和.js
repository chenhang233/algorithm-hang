/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = []
  if (nums.length < 3) return res
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; ++i) {
    let num1 = nums[i]
    if (num1 > 0) break
    if (num1 === nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const num = num1 + nums[left] + nums[right]
      if (num === 0) {
        res.push([num1, nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (num < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return res
}
