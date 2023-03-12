/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  nums.sort((a, b) => b - a)
  let prev = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    prev += nums[i]
    if (prev > 0) count++
    else break
  }
  return count
}
console.log(maxScore([2, -1, 0, 1, -3, 3, -3]), maxScore([-2, -3, 0]))
