/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let count = 0
  let time = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
      count += nums[i]
      time++
    }
  }
  return !count ? 0 : Math.floor(count / time)
}

console.log(averageValue([1, 3, 6, 10, 12, 15]))
