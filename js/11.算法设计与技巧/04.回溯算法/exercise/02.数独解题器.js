const isSafe = (board, row, col, n) => {
  let flag = true
  for (let i = 0; i < col; i++) {
    if (board[row][i] === n) flag = false
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === n) flag = false
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + (row - (row % 3))][j + (col - (col % 3))] === n)
        flag = false
    }
  }
  return flag
}
const sudokuSolver = (board) => {
  const y = board.length
  const x = board[0].length
  let i = 0,
    j = 0
  let flag = false
  for (i = 0; i < y; i++) {
    for (j = 0; j < x; j++) {
      if (board[i][j] === 0) {
        flag = true
        break
      }
    }
    if (flag) break
  }
  if (!flag) return true
  for (let n = 1; n <= 9; n++) {
    if (isSafe(board, i, j, n)) {
      board[i][j] = n
      if (sudokuSolver(board)) {
        return true
      }
      board[i][j] = 0
    }
  }
  return false
}

const sudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
]
console.log(sudokuSolver(sudokuGrid))
console.log(sudokuGrid)
