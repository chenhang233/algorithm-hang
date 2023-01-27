/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const row_max = matrix.length
  const col_max = matrix[0].length
  const visited = Array.from({ length: row_max }, () =>
    Array.from({ length: col_max }, () => 0)
  )
  for (let r = 0; r < row_max; r++) {
    for (let c = 0; c < col_max; c++) {
      if (matrix[r][c] == '1')
        visited[r][c] = c === 0 ? 1 : visited[r][c - 1] + 1
    }
  }
  let res = 0
  for (let r = 0; r < row_max; r++) {
    for (let c = 0; c < col_max; c++) {
      if (matrix[r][c] === '1') {
        let width = visited[r][c]
        let area = width
        for (let k = r - 1; k >= 0; k--) {
          width = Math.min(width, visited[k][c])
          area = Math.max(area, (r - k + 1) * width)
        }
        res = Math.max(res, area)
      }
    }
  }
  return res
}
