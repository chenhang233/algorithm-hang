/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const n = nums.length
  let map = {}
  let res = 0
  let l = 0
  let r = 0
  for (let i = 0; i < n; i++) {
    map = {}
    let f = false
    let count = nums[l]
    map[count] = true
    if (k == 1 && count > res) res = count
    while (k > 1 && r - l < k && nums[r + 1] !== nums[r]) {
      f = true
      r++
      if (map[nums[r]]) {
        r--
        break
      }
      map[nums[r]] = true
      count += nums[r]
      if (r - l === k - 1) {
        if (count > res) res = count
        count -= nums[l]
        delete map[nums[l]]
        i++
        l++
      }
    }
    if (!f) {
      l++
      r++
    } else {
      l = r
    }
  }
  return res
}
