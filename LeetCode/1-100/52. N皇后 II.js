/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const backtrack = (n, row, colset, diagonalLeft, diagonalRight) => {
    if (n === row) {
      return 1
    }
    let count = 0
    for (let i = 0; i < n; i++) {
      if (colset.has(i)) continue
      const diagonal1 = row - i
      if (diagonalLeft.has(diagonal1)) continue
      const diagonal2 = row + i
      if (diagonalRight.has(diagonal2)) continue
      colset.add(i)
      diagonalLeft.add(diagonal1)
      diagonalRight.add(diagonal2)
      count += backtrack(n, row + 1, colset, diagonalLeft, diagonalRight)
      colset.delete(i)
      diagonalLeft.delete(diagonal1)
      diagonalRight.delete(diagonal2)
    }
    return count
  }
  const colset = new Set()
  const diagonalLeft = new Set()
  const diagonalRight = new Set()
  return backtrack(n, 0, colset, diagonalLeft, diagonalRight)
}
