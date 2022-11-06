/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length
  let res = []
  let count = 0
  for (let i = 0; i <= n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i + 1] = 0
    }
    if (!nums[i]) count++

    if (nums[i]) res.push(nums[i])
  }
  if (count) res = res.concat(Array.from({ length: count }, () => 0))
  console.log(res)
  return res
}

applyOperations([1, 2, 2, 1, 1, 0])
// [1,4,2,0,0,0]
