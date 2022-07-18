/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 矩阵方法
var convert = function (s, numRows) {
  let r = numRows,
    n = s.length
  if (r === 1 || n <= r) {
    // 只有一列,返回字符
    return s
  }
  // 矩阵的行 = r
  // 矩阵的列 = 每个周期的列 * 多少个周期
  // 每个周期的列 = r - 2 + 1 = r - 1
  // 多少个周期 = n / 每个周期的字符
  // 每个周期的字符 = r + r - 2 = r * 2 - 2
  let roundStr = r * 2 - 2
  let matrixColumn = (n / roundStr) * (r - 1)
  const matrix = Array.from({ length: r }, (_) =>
    Array.from({ length: matrixColumn }, (_) => 0)
  )
  for (let x = 0, y = 0, i = 0; i < n; ++i) {
    matrix[x][y] = s[i]
    if (i % roundStr < r - 1) {
      x++
    } else {
      x--
      y++
    }
  }
  const arr = []
  for (let k of matrix) {
    for (let j of k) {
      if (j !== 0) {
        arr.push(j)
      }
    }
  }
  return arr.join('')
}
