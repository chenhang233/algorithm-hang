/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let n = grid[0].length
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    grid[i].sort((a, b) => a - b)
  }
  while (n) {
    let max = 0
    for (let i = 0; i < grid.length; i++) {
      max = Math.max(grid[i].pop(), max)
    }
    n--
    res += max
  }
  return res
}

deleteGreatestValue([[10]])
