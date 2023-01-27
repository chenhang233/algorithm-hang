/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = Array.from({ length: numRows }, (_, i) => {
    return Array.from({ length: i + 1 }, () => 1)
  })
  for (let i = 2; i <= numRows - 1; i++) {
    for (let j = 1; j < result[i].length - 1; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
    }
  }
  return result
}
