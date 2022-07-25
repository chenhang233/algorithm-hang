/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    let l = height[left]
    let r = height[right]
    let h = l > r ? r : l
    let newmax = h * (right - left)
    if (max < newmax) {
      max = newmax
    }
    if (l > r) {
      right--
    } else {
      left++
    }
  }
  return max
}
