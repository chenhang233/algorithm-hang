/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const numsLen = nums.length
  const result = []
  const fn = (index) => {
    if (index === numsLen) {
      result.push([...nums])
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
