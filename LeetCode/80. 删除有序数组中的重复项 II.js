/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length
  if (n < 3) return n
  let fast = 2,
    slow = 2
  while (fast < n) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}
