/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length
  if (n === 0) return
  const leftMax = Array.from({ length: n }, (_, i) => i)
  leftMax[0] = height[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }
  const rightMax = Array.from({ length: n }, (_, i) => i)
  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }
  let answer = 0
  for (let i = 0; i < n; i++) {
    answer += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return answer
}
