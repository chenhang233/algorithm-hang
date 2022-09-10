/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [],
    path = []
  const vis = Array.from({ length: nums.length }, () => false)
  const backtrack = () => {
    if (path.length === nums.length) {
      return res.push([...path])
    }
    for (let i = 0; i < nums.length; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) continue
      path.push(nums[i])
      vis[i] = true
      backtrack()
      path.pop()
      vis[i] = false
    }
  }
  nums.sort((a, b) => a - b)
  backtrack()
  return res
}
