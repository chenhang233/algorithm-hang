/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length
  const path = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        path.push([i, j])
      }
    }
  }
  for (let arr of path) {
    const [row, col] = arr
    for (let k = 0; k < n; k++) {
      matrix[row][k] = 0
    }
    for (let j = 0; j < m; j++) {
      matrix[j][col] = 0
    }
  }
  return matrix
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes2 = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length
  let row0 = false,
    col0 = false
  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === 0) row0 = true
  }
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) col0 = true
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0
        matrix[i][0] = 0
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[0][j] || !matrix[i][0]) matrix[i][j] = 0
    }
  }
  if (row0) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0
    }
  }
  if (col0) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
  return matrix
}
