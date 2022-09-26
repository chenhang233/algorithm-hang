/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const matrix = Array.from({ length: m }, (_) =>
    Array.from({ length: n }, () => 0)
  )
  for (let i = 0; i < n; i++) {
    matrix[0][i] = 1
  }
  for (let j = 0; j < m; j++) {
    matrix[j][0] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
    }
  }
  return matrix[m - 1][n - 1]
}
