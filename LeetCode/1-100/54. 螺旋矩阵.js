/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return []
  const rows = matrix.length,
    columns = matrix[0].length
  const total = rows * columns
  const order = Array.from({ length: total }, () => 0)
  const visited = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => false)
  )
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let row = 0,
    column = 0,
    direction = 0
  for (let i = 0; i < total; i++) {
    order[i] = matrix[row][column]
    visited[row][column] = true
    const nextRow = row + directions[direction][0],
      nextColumn = column + directions[direction][1]
    if (
      !(
        0 <= nextRow &&
        nextRow < rows &&
        0 <= nextColumn &&
        nextColumn < columns &&
        !visited[nextRow][nextColumn]
      )
    ) {
      direction = (direction + 1) % 4
    }
    row = row + directions[direction][0]
    column = column + directions[direction][1]
  }
  return order
}
