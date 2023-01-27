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
    console.log(nums[slow - 2], nums[fast], slow, fast)
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}

console.log(removeDuplicates([1, 2, 2, 3]))
