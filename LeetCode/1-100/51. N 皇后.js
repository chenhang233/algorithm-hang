/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const result = []
  const transform = (board) => {
    return board.map((arr) => {
      let str = ''
      arr.forEach((v) => (str += v))
      return str
    })
  }
  const isValid = (row, col, board, n) => {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false
    }
    return true
  }
  const backtrack = (row, board) => {
    if (row === n) {
      return result.push(transform(board))
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, board, n)) {
        board[row][col] = 'Q'
        backtrack(row + 1, board)
        board[row][col] = '.'
      }
    }
  }
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => '.')
  )
  backtrack(0, board)
  return result
}
