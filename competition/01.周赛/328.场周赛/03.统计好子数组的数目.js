/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const dp = Array.from({ length: nums.length }, () => 0)
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    if (i > 0) dp[i] = dp[i - 1]
    if (map.get(nums[i]) > 1) dp[i]++
  }
  console.log(dp)
  return dp[nums.length - 1]
}

console.log(countGood([3, 1, 4, 3, 2, 2, 4], 2))
