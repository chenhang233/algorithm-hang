/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  const l = nums.length
  const pre = []
  pre[-1] = 0
  for (let i = 0; i < l; i++) {
    pre[i] = pre[i - 1] + nums[i]
  }
  const cache = Array.from({ length: l + 1 }, () => new Array(k + 1))
  function splitNums(i, k) {
    if (cache[i][k] !== undefined) return cache[i][k]
    if ((!k && i < l) || (i === l && k)) {
      return (cache[i][k] = -Infinity)
    }

    let max = 0
    for (let j = i; j < l; j++) {
      const t = (pre[j] - pre[i - 1]) / (j - i + 1) + splitNums(j + 1, k - 1)
      max = Math.max(t, max)
    }
    cache[i][k] = max
    return max
  }

  return splitNums(0, k)
}
