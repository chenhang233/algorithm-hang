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
// 2 - 1
// 3 - 2
// 4 - 3 假如有4个一样的 拆分为 1 + 2 + 3 = 6种子数组

console.log(countGood([3, 3, 1, 4, 3, 2, 2, 4], 3))
