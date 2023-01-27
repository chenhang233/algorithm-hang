/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let n = heights.length
  let res = 0
  let leftBoard = []
  let rightBoard = Array.from({ length: n }, (_, i) => n)
  let stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      rightBoard[stack.pop()] = i
    }
    stack.push(i)
  }
  stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      stack.pop()
    }
    leftBoard[i] = stack.length ? stack[stack.length - 1] : -1
    stack.push(i)
  }
  for (let i = 0; i < n; i++) {
    res = Math.max(res, heights[i] * (rightBoard[i] - leftBoard[i] - 1))
  }
  return res
}
