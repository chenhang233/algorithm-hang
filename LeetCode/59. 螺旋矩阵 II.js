/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) return [[1]]
  const matrixMap = Array.from({ length: n }, (_) =>
    Array.from({ length: n }, () => 0)
  )
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let rowLen = n
  let row = 0
  let column = 0
  let directIndex = 0
  for (let i = 0; i < n * n; ++i) {
    matrixMap[row][column] = i + 1
    const nextRow = row + direction[directIndex][0],
      nextCol = column + direction[directIndex][1]
    if (
      !(
        0 <= nextRow &&
        nextRow < rowLen &&
        0 <= nextCol &&
        nextCol < rowLen &&
        !matrixMap[nextRow][nextCol]
      )
    ) {
      directIndex = (directIndex + 1) % 4
    }
    row = row + direction[directIndex][0]
    column = column + direction[directIndex][1]
  }
  return matrixMap
}
