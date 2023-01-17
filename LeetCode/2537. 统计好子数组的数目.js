/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const map = new Map()
  let left = 0,
    right = 0,
    result = 0,
    temp = 0
  while (right < nums.length) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1)
    temp += map.get(nums[right]) - 1
    while (temp >= k) {
      result += nums.length - right
      temp -= map.get(nums[left]) - 1
      map.set(nums[left], map.get(nums[left++]) - 1)
    }
    right++
  }
  return result
}
