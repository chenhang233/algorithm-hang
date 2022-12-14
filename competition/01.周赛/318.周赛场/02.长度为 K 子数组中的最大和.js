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

console.log(
  maximumSubarraySum([4, 3, 3, 3, 2], 3), // 0
  maximumSubarraySum([2, 5, 4, 5], 4), // 0
  maximumSubarraySum([5, 3, 3, 1, 1], 3), // 0
  maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3), // 15
  maximumSubarraySum([4, 4, 4], 3), // 0
  maximumSubarraySum([9, 18, 10, 13, 17, 9, 19, 2, 1, 18], 5), // 68
  maximumSubarraySum([3, 2, 3, 1], 3), // 6
  maximumSubarraySum([1, 1, 1, 7, 8, 9], 3) // 24
)
