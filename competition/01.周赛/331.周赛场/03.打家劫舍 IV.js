/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i]
  }
  return min
}

console.log(minCapability([2, 3, 5, 9], 2))
