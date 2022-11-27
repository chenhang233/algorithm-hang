/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function (nums) {
  nums.sort((a, b) => a - b)
  const map = {}
  let count = 0
  while (nums.length > 2) {
    const average = (nums[0] + nums[nums.length - 1]) / 2
    if (!map[average]) {
      map[average] = 1
      count++
    }
    nums.shift()
    nums.pop()
  }
  const lastAverage = (nums[0] + nums[1]) / 2
  if (!map[lastAverage]) {
    map[lastAverage] = 1
    count++
  }
  return count
}

// distinctAverages([4, 1, 4, 0, 3, 5])
// distinctAverages([1, 100])
// distinctAverages([10, 2, 2, 0, 4, 0])
console.log(distinctAverages([0, 0, 7, 2]))
