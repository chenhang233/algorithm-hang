function sudokuSolver(matrix) {
  if (solveSudoku(matrix) === true) {
    return matrix
  }
  return '问题无解！'
}

function solveSudoku(matrix) {
  const unAssigned = 0
  let row = 0
  let col = 0
  let checkBlankSpaces = false
  for (row = 0; row < matrix.length; row++) {
    for (col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === unAssigned) {
        checkBlankSpaces = true
        break
      }
    }
    if (checkBlankSpaces) {
      break
    }
  }
  if (!checkBlankSpaces) {
    return true
  }
  for (let num = 1; num <= 9; num++) {
    if (isSafe(matrix, row, col, num)) {
      matrix[row][col] = num
      if (solveSudoku(matrix)) {
        return true
      }
      matrix[row][col] = unAssigned
    }
  }
  return false
}

function isSafe(matrix, row, col, num) {
  return !usedInRow(matrix, row, num) && !usedInCol(matrix, col, num) && !usedInBox(matrix, row - (row % 3), col - (col % 3), num)
}
function usedInRow(matrix, row, num) {
  for (let i = 0; i <= matrix.length; i++) {
    if (matrix[row][i] === num) {
      return true
    }
  }
  return false
}
function usedInCol(matrix, col, num) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][col] === num) {
      return true
    }
  }
  return false
}
function usedInBox(matrix, row, col, num) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[row + i][col + j] === num) {
        return true
      }
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
