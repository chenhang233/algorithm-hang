/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const matrix = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  )
  for (const [x1, y1, x2, y2] of queries) {
    let nextX = x1
    let nextY = y1
    for (let u = 0; u <= y2 - y1; u++) {
      while (nextX <= x2) {
        matrix[nextX++][nextY]++
      }
      nextX = x1
      nextY++
    }
  }
  return matrix
}

rangeAddQueries(3, [
  [1, 1, 2, 2],
  [0, 0, 1, 1],
])

rangeAddQueries(2, [[0, 0, 1, 1]])
