/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const n = nums.length
  for (let i = 0; i < 1 << n; i++) {
    const t = []
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        t.push(nums[j])
      }
    }
    res.push(t)
  }
  return res
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets2 = function (nums) {
  const res = []
  const dfs = (c, path) => {
    console.log(path, 'path', c)
    if (c === nums.length) return res.push([...path])
    path.push(nums[c])
    dfs(c + 1, path)
    path.pop()
    dfs(c + 1, path)
  }
  dfs(0, [])
  return res
}

console.log(subsets2([2, 4, 6]))
