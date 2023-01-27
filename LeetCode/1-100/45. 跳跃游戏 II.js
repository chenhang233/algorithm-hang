/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let position = nums.length - 1
  let step = 0
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (i + nums[i] >= position) {
        position = i
        step++
        break
      }
    }
  }
  return step
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function (nums) {
  let step = 0,
    start = 0,
    end = 1
  while (end < nums.length) {
    let tempMax = 0
    for (let i = start; i < end; i++) {
      tempMax = Math.max(tempMax, i + nums[i])
    }
    start = end
    end = tempMax + 1
    step++
  }
  return step
}
