/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  let unAssgined = '.'
  let row = 0
  let col = 0
  let checkEverySpaces = false
  for (row = 0; row < board.length; row++) {
    for (col = 0; col < board[row].length; col++) {
      if (board[row][col] === unAssgined) {
        checkEverySpaces = true
        break
      }
    }
    if (checkEverySpaces) break
  }
  if (!checkEverySpaces) return true
  for (let n = 1; n <= 9; n++) {
    if (isSafe(board, row, col, n)) {
      board[row][col] = String(n)
      if (solveSudoku(board)) {
        return true
      }
      board[row][col] = unAssgined
    }
  }
  return false
}

function isSafe(board, row, col, n) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === String(n)) return false
  }
  for (let j = 0; j < board.length; j++) {
    if (board[j][col] === String(n)) return false
  }
  const startRowBox = row - (row % 3)
  const startColBox = col - (col % 3)
  for (let k = 0; k < 3; k++) {
    for (let l = 0; l < 3; l++) {
      if (board[startRowBox + k][startColBox + l] === String(n)) return false
    }
  }
  return true
}
