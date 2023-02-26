/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let count = 0
  const map = {}
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      //   console.log(map, 'map')
      if (!map[i] && !map[j] && nums[i] * 2 <= nums[j]) {
        map[i] = true
        map[j] = true
        count += 2
        console.log(map, '--')
      }
    }
  }
  console.log(count)
  return count
}

// maxNumOfMarkedIndices([3, 5, 2, 4])
maxNumOfMarkedIndices([9, 2, 5, 4])
// maxNumOfMarkedIndices([7, 6, 8])
