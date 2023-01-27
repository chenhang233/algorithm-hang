/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const numsLen = nums.length
  const result = []
  const fn = (index) => {
    if (index === numsLen) {
      return result.push([...nums])
    }
    for (let i = index; i < numsLen; i++) {
      ;[nums[i], nums[index]] = [nums[index], nums[i]]
      fn(index + 1)
      ;[nums[index], nums[i]] = [nums[i], nums[index]]
    }
  }
  fn(0)
  return result
}

console.log(permute([1, 2, 3]))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute2 = function (nums) {
  const res = [],
    path = []
  const backtrack = (n, k, used) => {
    if (path.length === k) {
      return res.push([...path])
    }
    for (let i = 0; i < k; ++i) {
      if (used[i]) continue
      used[i] = true
      path.push(n[i])
      backtrack(n, k, used)
      used[i] = false
      path.pop()
    }
  }
  backtrack(nums, nums.length, [])
  return res
}
