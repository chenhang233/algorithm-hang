/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  let row = [poured]
  for (let i = 1; i <= query_row; i++) {
    const nextRow = Array.from({ length: i + 1 }, () => 0)
    for (let j = 0; j < i; j++) {
      const value = row[j]
      if (value > 1) {
        nextRow[j] += (value - 1) / 2
        nextRow[j + 1] += (value - 1) / 2
      }
    }
    row = nextRow
  }
  return Math.min(1, row[query_glass])
}
