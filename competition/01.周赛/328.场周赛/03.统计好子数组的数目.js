/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const map = new Map()
  let left = 0,
    right = 0,
    result = 0,
    temp = 0
  while (right < nums.length) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1)
    temp += map.get(nums[right]) - 1
    console.log(map, nums[right], 'temp ' + temp)
    while (temp >= k) {
      console.log(temp, k, left, right)
      result += nums.length - right
      temp -= map.get(nums[left]) - 1
      map.set(map.get(nums[left++]) - 1)
    }
    right++
  }
  console.log(result, 'result')
}

console.log(countGood([3, 1, 4, 3, 2, 2, 4], 3))
